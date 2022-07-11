const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'embed',
  description: `Comando de embed`,
  type: 'CHAT_INPUT',

run: async(client, interaction) => {

let embed = new MessageEmbed()
.setAuthor('Author aqui', "")
.setColor('#7300f')
.setTitle(`Título aqui`)
.setDescription(`Descrição aqui`)
.setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))

interaction.reply({embeds: [embed]})
  }
}