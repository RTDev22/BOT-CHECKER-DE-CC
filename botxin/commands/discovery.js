const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let Haikazin = new MessageEmbed()
.setAuthor('Ola Sou O FGC Bot.', "")
.setColor('#7300f')
.setTitle(`Aqui Esta Sua Bin discovery`)
.setDescription(`**🔰 BIN FOR DISCOVERY+ USA🔰

📤| BIN: 4016585852xxxxxx
📤| EXP : RND
📤| CVV: RND
📮| IP: USA 🇺🇸

🧬| LINK: www.discoveryplus.com
🧬| CC GEN: https://namso-gen.com**

**✅Espero Que Funcione!**`)

  message.channel.send({ embeds: [Haikazin] })
}