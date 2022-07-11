const Discord = require('discord.js')

module.exports = {
name: "reportbug",
author: "ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ#0552",
aliases:["bugreport", "reportarbug"], 
run: async (client, message, args) => {

let user = client.users.cache.get("882705966787870772") //coloque seu id aq pra o bug ser enviado na sua dm

const don = new Discord.MessageEmbed()
  .setDescription("`>>reportbug [bug]`")
  .setColor("#36393e")
const reporte = args.join(" ")
if(!reporte) return message.channel.send({embeds: [don]}) 

const embed = new Discord.MessageEmbed()

.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
.setTimestamp()
.setColor("#36393e")
.setTitle(`<:2699:958927905092681778> ɴᴇᴡ ʙᴜɢ ʀᴇᴘᴏʀᴛᴇᴅ <:2699:958927905092681778>
`)
.addFields(
{
name: "<:iconstar:958927905306587196> Bug Reportado:", 
value: `\n\`\`\` ${reporte}\`\`\``,
inline: true
}, 
{
name: "⠀",
value: `<:4586bughunterblack:958926294752579584> \`${message.author.tag}\` \n 
:bughunterpink: \`${message.author.id}\``,
inline: false
})
const embed30 = new Discord.MessageEmbed()
.setDescription(`<:5013bughunterpurple:958927905268850748> | ${message.author} Sua descrição foi enviado com sucesso`)
.setColor("#36393e")
message.channel.send({embeds: [embed30]})

user.send({embeds: [embed]})
}
}