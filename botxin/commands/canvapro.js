const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin CanvaPro`)
.setDescription(`**๐ฐ BIN CANVA PRO ๐ฐ

๐ค| BIN: 5398172013xxxxxx
๐ค| FECHA: RND
๐ค| CVV: RND
๐ฎ| IP: UK ๐ฌ๐ง

๐งฌ| LINK: https://Canva.com
๐งฌ| CC GEN: https://namso-gen.com
**

**โEspero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}