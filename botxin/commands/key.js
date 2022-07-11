const Discord = require("discord.js"); 
const firebase = require('firebase');
const database = firebase.database();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const { keyGen, timestamp } = require('undefined_package');

module.exports = {
    name: "gerarkey",
    description: "Gere Uma Chave Com Tempo Até Expirar!",
    type: 'CHAT_INPUT',
  
    run: async (client, interaction, args) => {

let tempo = 'Mês' //Aqui Pode Trocar Por Segundo, Minuto, Hora, Dia, Semana, Mês ou Ano
let quantidade = 1 //Quantidade Escolhida De Segundo, Minuto, Hora, Dia, Semana, Mês ou Ano

if (interaction.member.id !== "940423774170411098") return interaction.reply("Somente Meu Dono Pode Utilizar Isto!");
  
let dbref = database.ref(`codigosvip`)
 database.ref(`codigosvip`)
  .once('value').then(async function(db) {
    
let array = await database.ref(`codigosvip/ativos`).once('value')

if(!array) array = []

let verificar = array.val()

let val = keyGen()

let dbref2 = database.ref(`codigosvip/expirar/${val}`)
 database.ref(`codigosvip/expirar/${val}`)
  .once('value').then(async function(db2) {
    
verificar.push(val)
let data = timestamp().now()
let vence = timestamp().add(tempo, quantidade)
    
const embed = new Discord.MessageEmbed()
.setTitle('Key Vip Gerada')
.setDescription(`Key Gerada: \`\`${val}\`\`
\nQuantidade De Keys Ativas: \`\`${verificar.length - 1}\`\`
\nCriada Em: <t:${data}:d>
\nData De Vencimento: <t:${vence}:R>
`)
      
interaction.reply({embeds: [embed], ephemeral: true})
    
dbref.update({
  ativos: verificar,    
  })
dbref2.update({
  expirar: timestamp().add(tempo, quantidade),    
  })

  })
  })
}
}