const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async(bot, message, args ) => {
   message.delete()

   const { body } = await superagent.get('http://13.92.80.216/New%20folder%20(2)/api.php?lista=')

     const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:coroinha: ****${message.author.username}**** o wallpaper que encontrei`)
      .setImage(body.url)
      .setFooter('Olha que wallpaper')

 await message.channel.send({ embeds: [embed] })
}
