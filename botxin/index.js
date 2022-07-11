const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 

client.login(config.token); 

client.once('ready', async () => {

    console.log("✅ - Estou online!")

})

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});
client.once(`ready`, async() => {
    let canal_teste = client.channels.cache.get("973298793057488916");

    const Row1 = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId(`ticket-menu`)
            .setPlaceholder(`Abra seu ticket aqui`)
            .addOptions([{
                    label: 'Boso Do Sexo',
                    value: 'botão1',
                    description: 'Bunda.',
                    emoji: '✅',
                },
                {
                  label: 'Boso Do 3',
                    value: '976245438074195989',
                    description: 'botão2',
                    emoji: '✅'
                },
                {
                    label: 'Boso Do 1',
                    value: '976245438074195989',
                    description: 'botão3',
                    emoji: '✅'
                }
            ])
        )


    let store = new Discord.MessageEmbed()
        .setColor(`GREEN`)
        .setTitle(`Tenta Sortess`)
        .setDescription(`SEXE.`)

    canal_teste.send({ embeds: [store], components: [Row1] });
})

client.on('interactionCreate', async interaction => {

    if (interaction.values[0] === 'botão1') {
        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            permissionOverwrites: [{
                    id: interaction.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: interaction.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async canal => {
            const embedcompra = new Discord.MessageEmbed()
                .setTitle(`12321`)
                .setDescription(`asdasdas`)
                .setFooter(`asdaaaad`)
            canal.send({ embeds: [embedcompra] })
        })
    }

    if (interaction.values[0] === 'botão2'){}

    if (interaction.values[0] === 'botão3'){}
});
client.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("973255545668657184");
  let channel = client.channels.cache.get("973298773482700810");
  const cargo = member.guild.roles.cache.get("885626300251902033")

  if (guild != member.guild) {

    return console.log ("Um membro entrou em outro servidor");

  } else {

    member.roles.add(cargo)
    
    let entrada = new Discord.MessageEmbed()
    .setDescription(`Seja bem-vindo ao nosso servidor. Você é o nosso **${guild.memberCount}°** membro a entrar no servidor!

> **Informações:**

**ID do membro:** \`${member.user.id}\``)
    .setAuthor (`${member.user.tag} entrou no servidor!`, member.user.displayAvatarURL())
.setFooter("Quaisquer erro no discord ou no bot, contate algum dos donos.", "https://cdn.discordapp.com/attachments/973298793057488916/977020257820635136/968693388587184168.png");

    await channel.send({ embeds: [entrada] })
  }

});
  process.on('unhandledRejection', (reason, p) => {
        console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');
        console.log(reason, p);
    });

    process.on("uncaughtException", (err, origin) => {
        console.log(' [ ANTICLASH] | CATCH ERROR');
        console.log(err, origin);
    }) 

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [ ANTICLASH ] | BLOQUEADO');
        console.log(err, origin);
    });

    process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [ ANTICLASH ] | VÁRIOS ERROS');
        console.log(type, promise, reason);
    });



  
//Bota isso na index, by ferinha, editado por victor


client.on('interactionCreate', interaction => {

    let cargo = interaction.guild.roles.cache.get("979530490325368904");
    let cargoR = interaction.guild.roles.cache.get("979530490325368904")
  
  
    if (interaction.isButton()) {
        if (interaction.customId.startsWith("botao_cargo")) {
            try {
  
            if (interaction.member.roles.cache.get(cargo.id)) {
                interaction.reply({ content: `\\❌ Você já está verificado no servidor.`, ephemeral: true })
  
            } else {
  
            interaction.member.roles.add(cargo)
            interaction.member.roles.remove(cargoR)
            interaction.reply({ content: `\\✅ Você foi verificado no servidor com sucesso, agora você pode ver os nossos canais.`, ephemeral: true })
  
            }
            } catch (er) { console.log(er) }
        } else {}
  
    }
  
  }) 

client.on("clickButton", async (button) => {

    if(button.id === 'button1') {

      console.log(button)

  

  button.clicker.member.roles.add("979530490325368904") 

  

      let confirm = new Discord.MessageEmbed()

      .setTitle(`${button.clicker.user.tag} Foi verificado`)

      button.channel.send(confirm).then(msg=> {

        msg.delete({ timeout: 15000 });

            })

    }

    button.defer();

  })



  client.on("clickButton", async (button) => {

    if(button.id === 'button1') {

      console.log(button)

  

  button.clicker.member.roles.add("979530490325368904")

  

      let confirm = new Discord.MessageEmbed()

      .setTitle(`${button.clicker.user.tag} Foi verificado`)

      button.channel.send(confirm).then(msg=> {

        msg.delete({ timeout: 15000 });

            })

    }

    button.defer();

  })

///////////////////iniciando-status-bot
client.on("ready", () => {
    let activities = [
            `FGC STORE`,
            `$help`

        ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % 

activities.length]}`, {
        type: "PLAYING",
    }), 1000 * 10);
    client.user
        .setStatus("dnd")

});
/////////terminando-status-bot////