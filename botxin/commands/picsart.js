const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin Picsrat`)
.setDescription(`๐ฉ BIN PICSART 3 MONTHS ๐ฉ

๐ค| BIN: 410265700000xxxx
๐ค| FECHA: RND
๐ค| CVV: RND 
๐ฎ| IP: USA ๐บ๐ธ 

๐งฌ| LINK: www.picsart.com
๐งฌ| 3 MONTH LINK: www.picsart.com/smugmug-trial**

**โEspero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}