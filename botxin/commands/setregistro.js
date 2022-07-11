const Discord = require("discord.js")

module.exports = {
    name: "setregister",
    aliases: ["sr"],

    run: async(client, message, args) => {
        

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply(`Você não possui a permissão \`Administrador\` para utilizar este comando.`)
        } else {
            let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
            if (!canal) { 
                message.reply({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`!setregister [canal]\``)
                ] })
            } else {
                message.reply(`O canal de texto ${canal} foi configurado.`);
                canal.send({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`📘 **Responda as perguntas abaixo para se registrar no nosso servidor.**`)
                    .setDescription(`📘 | Homem, mulher ou não binário? (resposta obrigatória)\n📘 | Maior ou menor de 18 anos? (resposta obrigatória)\n📘 | Hétero ou LGBTQI+? (resposta obrigatória)\n📘 | Qual é o seu estado civil?(solteiro, namorando, enrolado ou casado)\n\n📘 | Todas as perguntas são Obrigatorias!`)
                    .setFooter(`${message.guild.name}`, message.guild.iconURL({format: "png"}))
          .setTimestamp()
                ], components: [

                ] })
            }
        }

       
        
    }
} // criar um comando chamado: setregister.js   