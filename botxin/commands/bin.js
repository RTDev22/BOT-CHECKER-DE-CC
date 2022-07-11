const superagent = require("superagent")
const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  superagent.get(`http://20.213.106.249/api23.php?lista=${args[0]}`).then(res =>{
    if(res.text.includes("Aprovada")){
      let live =  new MessageEmbed()
      .setColor('GREEN')
      .setAuthor("")
      .setDescription(res.text)
      .setThumbnail(client.user.displayAvatarURL())

    message.channel.send({ embeds: [live] })
    }else{
      let die =  new MessageEmbed()
      .setColor('#a80000')
      .setAuthor("Infos A Baixo!")
      .setDescription(res.text) .setThumbnail("https://cdn.discordapp.com/attachments/952055952205561856/952234940915920926/932877319914258432.gif")

      
    message.channel.send({ embeds: [die] })
    }
  })
  .catch(erro =>{
    message.channel.send('ocorreu um erro:'+ erro)
  })
}