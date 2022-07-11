const db = require("quick.db")

module.exports = {
    name: "prefix",
    aliases: ["setprefix"],

    run: async(client, message, args) => {

            if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`❌ » ${message.author} Você não possui a permisão \`MANAGE_GUILD\` para utilizar esse comando.`);
     
            if (!args[0]) {
                return message.reply(`❌ » ${message.author} Você não inseriu o prefix que deseja.`)
            } else {
        db.set(`prefixo_${message.guild.id}`, args[0]);
                message.reply(`✅ » ${message.author} O meu prefix foi alterado com sucesso!`)
            }
    }
}    
