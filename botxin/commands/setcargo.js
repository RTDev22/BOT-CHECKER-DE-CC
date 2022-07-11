//isso vai na sua index
//caso queira apenas o auto role use member.roles.add('ID_da_role') no final da sua msg de boas vindas

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'Nome_Do_Canal_De_Boas-vindas');
  if (!channel) return;
  let embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL())
  .setThumbnail(member.user.displayAvatarURL())
  .setImage("link_da_imagem_de_sua_preferncia")
  .setColor('#F781F3')
  .setDescription(`sua mensagem`)
  .setFooter(`${client.user.username}`)
  .setTimestamp(new Date())

  channel.send(embed)

  let dm = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL())
  .setColor("#F7FE2E")
  .setDescription(`sua mensagem`)
  .setTimestamp(new Date())

  member.send(dm)
  member.roles.add('ID_da_role')
//by: baliza:) hehehe
});
});