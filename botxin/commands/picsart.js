const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin Picsrat`)
.setDescription(`🎩 BIN PICSART 3 MONTHS 🎩

📤| BIN: 410265700000xxxx
📤| FECHA: RND
📤| CVV: RND 
📮| IP: USA 🇺🇸 

🧬| LINK: www.picsart.com
🧬| 3 MONTH LINK: www.picsart.com/smugmug-trial**

**✅Espero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}