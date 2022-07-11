const superagent = require("superagent")
const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{


  superagent.get(`http://20.213.106.249/cep.php?lista=${args[0]}`).then(res =>{
    if(res.text.includes("✅")){
      let live =  new MessageEmbed()
      .setColor('#ff00ea')
      .setAuthor("logradouro", "https://cdn.discordapp.com/attachments/951485510050807818/952714200071938058/b93dffb87d52bf8fe8a13bfc3a874.gif","")    .setDescription(res.text) 
      .setFooter("Cielo (Autorizada).")
      .setThumbnail("")
    message.channel.send({ embeds: [live] })
    }else{
      let die =  new MessageEmbed()
     .setAuthor("CEP A BAIXO", "https://cdn.discordapp.com/attachments/951485510050807818/952714200071938058/b93dffb87d52bf8fe8a13bfc3a874.gif","")
      .setColor('#a80000')
      .setFooter("SEXO!")
      .setDescription(res.text)
      .setThumbnail("")

    message.channel.send({ embeds: [die] })
    }
  })
  .catch(erro =>{
    message.channel.send('ocorreu um erro:'+ erro)
  })
}