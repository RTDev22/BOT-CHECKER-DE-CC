const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin HboMax`)
.setDescription(`**
ð¤| BIN: 40165801226xxxxx
ð¤| FECHA: RND
ð¤| CVV: RND
ð®| IP: USA ðºð¸

ð§¬| LINK: https://HboMax.com
ð§¬| GEN: https://technmind.com/ccgen/**

**âEspero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}