const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin CanvaPro`)
.setDescription(`**🔰 BIN CANVA PRO 🔰

📤| BIN: 5398172013xxxxxx
📤| FECHA: RND
📤| CVV: RND
📮| IP: UK 🇬🇧

🧬| LINK: https://Canva.com
🧬| CC GEN: https://namso-gen.com
**

**✅Espero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}