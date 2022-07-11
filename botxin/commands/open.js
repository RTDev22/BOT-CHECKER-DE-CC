const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu, } = require("discord.js");

module.exports = {
    name: "setup-ticket",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
        if (channel.type !== "GUILD_TEXT") return;
        if (!channel.permissionsFor(message.guild.me).has("SEND_MESSAGES") || !message.member.permissions.has("ADMINISTRATOR")) return;

        const embedTicket = new MessageEmbed()
            .setDescription("Para abrir um ticket clique no menu abaixo!")
            .setColor("#2f3136");
        
        const selectmenuTicket = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("ticket")
                .setPlaceholder("Clique aqui para selecionar uma categoria")
                .setOptions(
                    {
                        label: "Comprar",
                        value: "sup",
                        description: "Abrir.",
                    },
                    {
                        label: "Infos Sobre O Produto",
                        value: "duv",
                        description: "Abrir.",
                    }
                )
        );

        await channel.send({
            embeds: [embedTicket],
            components: [selectmenuTicket],
        });
        message.reply(`Mensagem para criação de tickets enviada! (${channel})`);
    },
};