const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin HboMax`)
.setDescription(`**
📤| BIN: 40165801226xxxxx
📤| FECHA: RND
📤| CVV: RND
📮| IP: USA 🇺🇸

🧬| LINK: https://HboMax.com
🧬| GEN: https://technmind.com/ccgen/**

**✅Espero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}