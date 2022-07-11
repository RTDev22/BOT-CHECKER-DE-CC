const Discord = require("discord.js");


console.log(`slash ticket - Online`)

module.exports = {
  name: 'ticket',
  description: 'use esse comando no chat de ticket',
  type: 'CHAT_INPUT',
  optios: [
    {
      name: 'canal',
      description: 'Canal que deseja setar o ticket',
      type: 'CANAL',
      required: false,
      }],
  run: async (client, interaction, args) => {
    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      interaction.reply(`Ops... Você não possui permissão \`ADMINISTRATOR\` para utilizar este comando`)
    } else {
      const canal = interaction.options.getChannel('canal') || interaction.channel;
      if (!canal.isText()) {
        return interaction.reply({ content: '❌ Selecione um canal de texto', ephemeral: true });
      }
      let embed = new Discord.MessageEmbed()
        .setColor("ffcdbd")
        .setImage("https://cdn.discordapp.com/attachments/953939991514447942/957711149879668866/unknown-1.png")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setFooter("Aperte o botão abaixo para abrir o ticket!")
        .setTimestamp(new Date())
        .setDescription(`> :timer_nya: **Sobre:**\nAbra um **Ticket** para obter Support no servidor\n\n> :gift_gif: **Descrição:**\nPor favor seja bem claro em sua dúvida para ter um support melhor!`);

      let botao = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
          .setCustomId("t")
          .setEmoji("<<:chave:957273691576733786>957273691576733786>")
          .setStyle("SECONDARY")
        );
      interaction.reply({ content: `Ticket enviado com sucesso para <#${canal.id}>` })
      canal.send({ embeds: [embed], components: [botao] }).then();
    }



  }
}

//index.js ou events interactionCreate

client.on("interactionCreate", (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "t") {
            if (interaction.guild.channels.cache.find(c => c.name === `🎟️-${interaction.user.tag}`)) {
                let c = interaction.guild.channels.cache.find(c => c.name === `🎟️-${interaction.user.tag}`);
                interaction.reply({ content: `Você já possui um ticket aberto em ${c}.`, ephemeral: true })
            } else {
                interaction.guild.channels.create(`🎟️-${interaction.user.tag}`, {
                    type: "GUILD_TEXT",
                    //parent: "",
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: ["VIEW_CHANNEL"]
                        },
                        {
                            id: interaction.user.id,
                            allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "ADD_REACTIONS"]
                        }
                    ]
                }).then(c => {

                    interaction.reply({ content: `Olá, seu ticket foi aberto em ${c}.`, ephemeral: true })

                    let embed = new Discord.MessageEmbed()
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .setDescription(`> <:lapis:957705280467132536> **Ticket aberto por:**\n${interaction.user}\n\n> <:new_member:956582582366138431> **Descrição:**\nOlá... ${interaction.user.tag} Bem por favor especifique o motivo para ter aberto o ticket ${c}, que seja bem claro! por favor`)
                    .setFooter("Aperte o botão abaixo para fechar o tickt!")
                    .setTimestamp(new Date())
                    .setColor('ffcdbd')

                    let botao = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                        .setCustomId("tf")
                        .setEmoji("<:chave:957273691576733786>")
                        .setStyle("SECONDARY")
                    );

                    c.send({ embeds: [embed], components: [botao] }).then(msg => msg.pin())
                })
            }
        } else if (interaction.customId === "tf") {
            interaction.reply(`este ticket será fechado em 5 segundos...`).then(() => {
                setTimeout(() => {
                    interaction.channel.delete();
                }, 5000)
            })
        }
    }
});