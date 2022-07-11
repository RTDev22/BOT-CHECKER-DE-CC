const { MessageMenu, MessageMenuOption } = require("discord-buttons");
const { Permissions, MessageEmbed } = require("discord.js");
const Command = require("../../classes/Command");
const { ConfigOption, ConfigOptionTypes, SelectorTypes, configurator } = require("../../classes/Configurator");
const embedCollector = require("../../classes/embedCollector");
const links = require('../embeds/links.json')
const ticketEmbed = require('../embeds/ticket-collector.json');

const command = new Command('set-tickets', 'Configurações-Staff')
    .setPermissions([Permissions.FLAGS.ADMINISTRATOR])
    .setExecute(execute);

async function execute(execParams) {
    const { message, client, db } = execParams;
    const options = [
        new ConfigOption('channel', ConfigOptionTypes.selector)
            .setSelectorType(SelectorTypes.textChannels)
            .setText('Escolha o canal onde será enviada a mensagem para abrir novos tickets:'),
        new ConfigOption('category', ConfigOptionTypes.selector)
            .setSelectorType(SelectorTypes.categoryChannels)
            .setText('Escolha a categoria onde novos tickets serão criados:'),
        new ConfigOption('roles', ConfigOptionTypes.selector)
            .setSelectorType(SelectorTypes.roles)
            .setText('Selecione o cargo que terá acesso aos tickets'),
    ]

    const configs = await configurator(message, options);
    let roles = [];
    for(role of configs.roles) {
        roles.push(role.id);
    }
    db.get(message.guild.id).set('ticket_sys', {
        category: configs.category[0],
        roles: roles
    }).write();
    const channel = configs.channel[0];
    const menuOptions = require('../embeds/ticket-options.json').fields;

    const menu = new MessageMenu()
        .setID('ticket-menu')
        .setMinValues('1')
        .setMaxValues('1')
        .setPlaceholder('Escolha uma opção')

    let fieldText = ''
    for (let i = 0; i < menuOptions.length; i++) {
        const element = menuOptions[i];
        menu.addOption(
            new MessageMenuOption()
                .setLabel(element.name)
                .setDescription(element.description)
                .setEmoji(element.emoji || null)
                .setValue(i)
        )

        fieldText += `\n${element.emoji} - ${element.name}`
    }
    const embed = ticketEmbed
    channel.send({embed: embed, component: menu});


}

module.exports = command;