const password = require('password-gen-v1')
const Discord = require ('discord.js')

module.exports = {
  name: "senha",

   run: async(client, message, args) => {
    

    const pass = password.newPassword(8)
    const pass2 = password.newPassword(19, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()')
    
const senha = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('SENHA GERADA ✅')
        .setDescription(`**SENHA COMUM:** || ${pass} ||

**SENHA DIFICIL:** || ${pass2} ||`)

        message.channel.send({content: "Senha gerada, olhe seu privado", ephemeral: true});

     let botao = new Discord.MessageActionRow()
            .addComponents(
               new Discord.MessageButton()
                .setCustomId("rege")
                .setLabel("Regenerar")
                .setStyle("PRIMARY")
                .setDisabled(false),
                new Discord.MessageButton()
                .setCustomId("dell")
                .setLabel("Deletar")
                .setStyle("DANGER")
                .setDisabled(false),
              )
     
        message.author.send({ embeds: [senha], components: [botao] });
 }
} // by don, John

// ============================================================================= //

// Parte na index.js

client.on("interactionCreate", (interaction, message) => {
  
    if (interaction.isButton()) {

       if (interaction.customId === "rege") {
         const password = require('password-gen-v1')
         const pass = password.newPassword(8)
         const pass2 = password.newPassword(19, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()')
         let embed = new Discord.MessageEmbed()

         .setColor('RANDOM')
        .setTitle('SENHA REGENERADA ✅')
        .setDescription(`**SENHA COMUM:** || ${pass} ||

**SENHA DIFICIL:** || ${pass2} ||`)
         interaction.reply({embeds: [embed]})
         
    } else if (interaction.customId === "dell") {
       interaction.reply({content: `\\🔒 Olá ${interaction.user}, seu pedido foi cancelado, e será excluido em \`5 segundos\`...`, ephemeral: true }).then(() => {
                setTimeout(() => {
                    interaction.message.delete();
                }, 5000)
            }).catch(e => console.log(`Ocorreu um erro`))
    }
  }
}); // by don, John