const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin Azure`)
.setDescription(`**BIN AZURE**

**💳| BIN:** 47428990006xxxxx
**🎈| IP: South Korea  (or your ip just use Korea address for account)**
**🔒| CVV: 000**

**✅Espero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}