const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "ticket_menu",
    author: "ferinha",

    run: async(client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`Apenas membros com a permissão de \`ADMINISTRADOR\`, poderão utilizar este comando.`);

        message.delete();

        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
          	.setTitle('FGC Store Bot')
.setDescription("```Material De Alta Qualidade!```")
          	.addFields(
	{ name: '✨ | Nome: ', value: 'MIX | FUZIL' },
		{ name: '💳 | Preço:', value: '5', inline: false },
		{ name: '🛒 | Estoque: ', value: '9', inline: false },
	)        .setThumbnail(message.guild.iconURL({ dynamic: true }))


        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Clique aqui.') // Mensagem estampada
        .addOptions([
               {
                label: 'Comprar',
                description: '',
                emoji: '🤖',
                value: 'bot',
               }
            ])

        );


        message.channel.send({ embeds: [embed], components: [painel] }).then(msg => {


            const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });
      

          coletor.on('collect', async (collected) => {

            let ticket = collected.values[0]
            collected.deferUpdate()




            if (ticket === "geral") {

                let embed_geral = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**🙋‍♂️ Olá ${collected.user}, seu ticket foi criado na categoria \`Suporte Geral\`.**`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_geral] }).then(msg => msg.pin() );
        
                });


            }



            if (ticket === "denuncias") {

                let embed_denuncias = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`**⛔ Olá ${collected.user}, seu ticket foi criado na categoria \`Denúncias\`.**`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_denuncias] }).then(msg => msg.pin() );
        
                });
                
            }



            if (ticket === "bot") {

                let embed_bot = new Discord.MessageEmbed()
                .setColor("RANDOM")
                  	.setAuthor({ name: 'FGC Store Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
                  	.setTitle('Chave Pix: ``677781c0-783a-4d63-98d7-ef95c0c709a2``')
                .setDescription(`**Olá Para Efetuar A Compra Do Produto\nPague O Valor Na Chave Pix A Cima\nE Marque Um Adm!**\n__Obrigado Pela Preferencia!__`);

                message.guild.channels.create(`${collected.user.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_bot] }).then(msg => msg.pin() );
        
                });
                
            }


          })
                

        });

        

    }
}