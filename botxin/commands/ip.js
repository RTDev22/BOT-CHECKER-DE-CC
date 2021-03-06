client.on("messageCreate", async(message) => {
    let args = message.content.trim().split(/ +/g)
    if(args[0] === '$ip') {
        if(!args[1]) return message.reply({ content: `Fale o IP que você quer consultar!` })
        const axios = require('axios').default;
        axios.get(`https://ipinfo.io/${args[1]}`)
      .then(function (response) {
          let embed = new MessageEmbed()
          .setColor(cor)
          .setTitle(`Consulta IP: \`${args[1]}\``)
          .addField(`Cidade:`, response.data.city || 'Desconheçida')
          .addField(`Região:`, response.data.region || 'Desconheçida')
          .addField(`País:`, response.data.country || 'Desconheçida')
          .addField(`Localização:`, response.data.loc || 'Desconheçida')
          .addField(`Organização:`, response.data.org || 'Desconheçida')
          .addField(`Codigo Postal:`, response.data.postal || 'Desconheçida')
          .addField(`Horario:`, response.data.timezone || 'Desconheçida')

          return message.reply({ embeds: [embed] })  
       })   
       .catch(function (error) {
         // handle error
        console.log(error);
      })       
    }
})