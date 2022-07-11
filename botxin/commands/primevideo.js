const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin PRIME VIDEO`)
.setDescription(`**🔰📤 BIN PRIME VIDEO 📤🔰

📤BIN: 43046094xxxxxxxx
📤FECHA: Aleatorio
📤CVV: Aleatorio
📍CÓDIGO POSTAL: 10080
📮IP: USA 🇺**

**✅Espero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}