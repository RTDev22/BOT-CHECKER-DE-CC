const Discord = require('discord.js')
module.exports = {
  name: '',
  aliases: '',
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle(`Lista de comandos`)
      .setDescription(`**✅ MENU DE COMANDOS

Escolha uma das opções a baixo e clique no botão correspondente.**`)
      .setColor('#ff0000')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      embed.setFooter(`Bot Desenvolvido Por RT'22#0001`)


    const buttons = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('1')
          .setStyle('SECONDARY')
          .setEmoji('🏰')
          .setLabel('Comandos De Checker')
          .setDisabled(false),
        
        new Discord.MessageButton()
          .setCustomId('2')
          .setStyle('SECONDARY')
          .setEmoji('📎')
          .setLabel('Comandos De Consulta')
          .setDisabled(false),

        new Discord.MessageButton()
          .setCustomId('3')
          .setStyle('SECONDARY')
          .setEmoji('💳')
          .setLabel('Bins GG')
          .setDisabled(false),
        
           new Discord.MessageButton()
          .setCustomId('4')
          .setStyle('SECONDARY')
          .setEmoji('❌')
          .setLabel('fechar help')
          .setDisabled(false)
      )

    message.channel.send({ embeds: [embed], components: [buttons] }).then(msg => {

      const filter = i => i.isButton();
      const collector = msg.createMessageComponentCollector({ filter: filter, time: 6e4 });

      collector.on("collect", async (interaction) => {
        if (interaction.user.id !== message.author.id) return;

        switch (interaction.customId) {
          case '1': {
            embed.setTitle(`Comandos De Checker`)
            embed.setDescription(`
\`\`\`fix\n
Checkar CC: $chk   Checker Kabum: $kb       
                                            
Checker Token: $token Checkar Bin: $Bin     
\`\`\``)
            embed.setColor('#ff0000')
            msg.edit({ embeds: [embed], components: [buttons] });
            await interaction.deferUpdate();
            embed.setFooter(`Bot Desenvolvido Por RT'22#0001`)
            break;
          }
          
          case '2': {
            embed.setTitle('Comandos De Consulta')
            embed.setDescription(`\`\`\`fix\nConsultar IP: $ip   Consultar CEP: $cep  

IP: $ip   CNPJ: $cnpj\`\`\``)
            embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            embed.setColor('#ff0000')
            embed.setFooter(`Bot Desenvolvido Por RT'22#0001`)
            msg.edit({ embeds: [embed], components: [buttons] })
            await interaction.deferUpdate();
            break;
          }
    
                    case '3': {
            embed.setTitle('Bins GG')
        embed.setDescription(`**Bin Azure:** $azure
**Bin Hbo Max**: $hbomax
**Primevideo:** $primevideo
**Discovery:** $discovery
**CanvaPro:** $canvapro`)
            embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            embed.setColor('#ff0000')
            embed.setFooter(`Bot Desenvolvido Por RT'22#0001`)
            msg.edit({ embeds: [embed], components: [buttons] })
            await interaction.deferUpdate();
            break;
          }
          case '4': {
            msg.delete()
             


            break;
          } //By Sr.Gui
        }
      })
    })
  }
}