const Discord = require('discord.js');

module.exports = {

    name: "setcargo",
    aliases: ['setarcargo'],

    run: async(client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`${message.author} **Voce não possui permissão para esse comando.**`); 

        let incomplet = new Discord.MessageEmbed()
        .setTitle(`✉️ | Comando de Setarcargo`)
        .setColor("BLUE")
        .setDescription(`**\n📋 | Descrição: Utilize esse comando para setar um cargo em um jogador.\n\n❓ | Como usar? Use da seguinte forma: s!setcargo (pessoa) (cargo)\n\n📜 | Exemplo: s!setcargo @Stompado13 @❪ Membros ❯**`)
    
        if (!args[0]) return message.reply({embeds: [incomplet]})
        const jogador = message.mentions.members.first() ||message.guild.members.cache.get(args[0].replace(/[<>@!]/g, ""));
        if (!args[1]) return message.reply({embeds: [incomplet]})
        const cargo = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        
        jogador.roles.add(cargo)

        let sucess = new Discord.MessageEmbed()
        .setTitle(`:white_check_mark: | Cargo definido com sucesso!`)
        .setColor("GREEN")
        .setDescription(`**📌 | Voce definiu o cargo de ${jogador} para ${args[1]} com sucesso!**`)
        await message.reply({embeds: [sucess]})

    }

}