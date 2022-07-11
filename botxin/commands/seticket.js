const Discord = require("discord.js")

const config = require("../../config.json")
module.exports =  {
name: "seticket",
description: "Cria o setup de ticket!",
type: "CHAT_INPUT",
options: [
    {
        name: "canal",
        type: "CHANNEL",
        description: "Qual canal deseja enviar o ticket?",
        required: true
        
        },
       

],


run: async (client, interaction, args) => {
    if (!interaction.guild) return interaction.followUp({ content: "Esse comando deve ser usado somente em um server" })
    if(!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.followUp({content: `Você não tem perm para isso!`});
if(!interaction.guild.me.permissions.has("ADMINISTRADOR")) return interaction.followUp({content: `Eu não tenho perm para isso!`});
    let channel =  interaction.options.getChannel('canal');

    var criar = new Discord.MessageButton().setCustomId("c").setLabel("Crie seu ticket").setStyle("PRIMARY")

interaction.followUp({content: `Epa, setup de tikcet iniciado!`})
const row = new Discord.MessageActionRow().addComponents(criar)
let embed = new Discord.MessageEmbed()
.setTitle("Olá! Deseja fazer algo?")
.setDescription("Leia antes!", `COLOQUE REGRAS AQUI!!!!!!!!!`)
.setColor(config.embed)
.setFooter("By: Pani Kaz#8893, Vector#3872")
channel.send({embeds: [embed], components: [row]})



}
}
