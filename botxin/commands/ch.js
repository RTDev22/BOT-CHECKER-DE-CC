const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "ch", // Coloque o nome do comando do arquivo
    aliases: ["chk"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        let d = db.get(`premium_${message.author.id}`);

        if (d !== true) {

            message.reply(`Este comando é apenas para usuários premium.`)

        } else {

            message.reply(`Parabéns ${message.author}! Você está utilizando meu comando premium.`);
            message.react("🎊");

        }

       
        
    }
}