const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'registrarmenu',
    aliases: ['rm'],

    run: async (client, message, args) => {

        let homem = "936373658543329382"  -- colocar o id do seu cargo
        let mulher = "936373675328950362"  -- colocar o id do seu cargo
        let naobinario = "936383951784796180"  -- colocar o id do seu cargo
        let menos18 = "936373687517589566"  -- colocar o id do seu cargo
        let mais18 = "936373701191016538"  -- colocar o id do seu cargo
        let hetero = "936373716537995304"  -- colocar o id do seu cargo
        let lgbt = "936373731914301501"  -- colocar o id do seu cargo
        let solteiro = "936373763845521458"  -- colocar o id do seu cargo
        let namorando = "936373750432165898"   -- colocar o id do seu cargo
        let casado = "936373777791594506"  -- colocar o id do seu cargo
        let enrolado = "936374056989630484"  -- colocar o id do seu cargo
        let equiperegistro = "936373801904635995"  -- colocar o id do seu cargo
        let registrado = "936373819789172847"  -- colocar o id do seu cargo
        let naoregistrado = "936383686922883112"  -- colocar o id do seu cargo
       
       if (!message.member.roles.cache.get(`${equiperegistro}`)) return message.reply(`🚫 Você precisa ser da equipe de registro para utilizar este comando.`);
       
        const membro = message.mentions.members.first()
        if (!membro) return message.reply({ embeds: [
                new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`!registrar [usuário]\``)
            ] });
        

        const genero = new Discord.MessageEmbed()
            .setTitle('Gênero')
            .setDescription('Escolha o genero do membro utilizando o menu abaixo\n\n**Exemplo:**\n♂️ Homem\n♀️ Mulher\n🌈 Não Binario.')
            .setColor('RANDOM')
            .setFooter({text:`Registrador: ${message.author.username}`})

        const idade = new Discord.MessageEmbed()
            .setTitle('Idade')
            .setDescription('Escolha a idade do membro utilizando o menu abaixo\n\n**Exemplo:**\n🍺 +18\n🔞 -18')
            .setColor('RANDOM')
            .setFooter({text:`Registrador: ${message.author.username}`})

        const sexualidade = new Discord.MessageEmbed()
            .setTitle('Sexualidade')
            .setDescription('Escolha a Sexualidade  do membro utilizando o menu abaixo\n\n**Exemplo:**\n🏁 Hetero\n🏳️‍🌈 LGBTQ+')
            .setColor('RANDOM')
            .setFooter({text:`Registrador: ${message.author.username}`})

        const estado = new Discord.MessageEmbed()
            .setTitle('Estado civil')
            .setDescription('Escolha o Estado civil do membro utilizando o menu abaixo\n\n**Exemplo:**\n🍻 Solteiro\n💋 Namorando\n❤️ Casado\n💫 Enrolado')
            .setColor('RANDOM')
            .setFooter({text:`Registrador: ${message.author.username}`})

            const completo = new Discord.MessageEmbed()
            .setTitle('Registro completo!')
            .setDescription(`
	> Registrador: ${message.author}
	> Registrado: ${membro}`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter({text:'Anime House'})


        const generodrop = new Discord.MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('generomenu')
                    .setPlaceholder('Genero!')
                    .addOptions([
                        {
                            label: 'Homem',
                            emoji: '♂️',
                            description: 'Genero masculino',
                            value: 'homem1'
                        },
                        {
                            label: 'Mulher',
                            emoji: '♀️',
                            description: 'Genero feminino',
                            value: 'mulher1'
                        },
                        {
                            label: 'Não binario',
                            emoji: '🌈',
                            description: 'Não binario',
                            value: 'outros1'
                        }
                    ])
            )

        const idadedrop = new Discord.MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('idademenu')
                    .setPlaceholder('Idade!')
                    .addOptions([
                        {
                            label: '-18',
                            emoji: '🔞',
                            description: 'Menos de 18 anos',
                            value: '-181'
                        },
                        {
                            label: '+18',
                            emoji: '🍺',
                            description: 'Maior de 18 anos',
                            value: '+181'
                        }
                    ])

            )
        const sexualidadedrop = new Discord.MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('sexualidademenu')
                    .setPlaceholder('Sexualidade!')
                    .addOptions([
                        {
                            label: 'Hetero',
                            emoji: '🏁',
                            description: 'Sexualidade hetero',
                            value: 'hetero1'
                        },
                        {
                            label: 'Lgbt',
                            emoji: '🏳️‍🌈',
                            description: 'Sexualidade Lgbt',
                            value: 'lgbt1'
                        }
                    ])
            )
        const Estadodrop = new Discord.MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('estadomenu')
                    .setPlaceholder('Estado civil!')
                    .addOptions([
                        {
                            label: 'Solteiro',
                            emoji: '🍻',
                            description: 'Estado solteiro',
                            value: 'solteiro1'
                        },
                        {
                            label: 'Namorando',
                            emoji: '💋',
                            description: 'Estado namorando',
                            value: 'namorando1'
                        },
                        {
                            label: 'Casado',
                            emoji: '❤️',
                            description: 'Estado Casado',
                            value: 'Casado1'
                        },
                        {
                            label: 'Enrolado',
                            emoji: '💫',
                            description: 'Estado Enrolado',
                            value: 'Enrolado1'
                        }
                    ])
            )

        const generocoletor = await message.channel.send({ embeds: [genero], components: [generodrop] })

        const filtro = (interaction) =>
            interaction.isSelectMenu()

        const coletor = generocoletor.createMessageComponentCollector({
            filtro
        });
        coletor.on('collect', async (collected) => {
            let ticket = collected.values[0]
            collected.deferUpdate()

            if (ticket === 'homem1') {



                membro.roles.add(homem)
            }

            if (ticket === 'mulher1') {



                membro.roles.add(mulher)

            }

            if (ticket === 'outros1') {



                membro.roles.add(naobinario)

            }

            const proxidadeh = await generocoletor.channel.send({ embeds: [idade], components: [idadedrop] })

            generocoletor.delete()

            const filtro = (interaction) =>
                interaction.isSelectMenu()

            const coletor = proxidadeh.createMessageComponentCollector({
                filtro
            });
            coletor.on('collect', async (collected) => {
                let ticket = collected.values[0]
                collected.deferUpdate()

                if (ticket === '-181') {

                    membro.roles.add(menos18)
                }

                if (ticket === '+181') {
                    membro.roles.add(mais18)
                }

                const proximasexu = await proxidadeh.channel.send({ embeds: [sexualidade], components: [sexualidadedrop] })
                proxidadeh.delete()
                

                const filtro = (interaction) =>
                    interaction.isSelectMenu()

                const coletor = proximasexu.createMessageComponentCollector({
                    filtro
                });
                coletor.on('collect', async (collected) => {
                    let ticket = collected.values[0]
                    collected.deferUpdate()

                    if (ticket === 'hetero1') {
                        membro.roles.add(hetero)
                    }

                    if (ticket === 'lgbt1') {
                        membro.roles.add(lgbt)
                    }

                    const proximaestadu = await proximasexu.channel.send({embeds: [estado], components: [Estadodrop]})
                    proximasexu.delete()

                    const filtro = (interaction) =>
                    interaction.isSelectMenu()
    
                const coletor = proximaestadu.createMessageComponentCollector({
                    filtro
                });
                coletor.on('collect', async (collected) => {
                    let ticket = collected.values[0]
                    collected.deferUpdate()
    
                    if (ticket === 'solteiro1') {
    
    
                       membro.roles.add(solteiro)
                        membro.roles.add(registrado)
                        membro.roles.remove(naoregistrado)
                       
                       message.channel.send({embeds: [completo]})

                       proximaestadu.delete()
                    }

                    if (ticket === 'namorando1') {
    
    
                        membro.roles.add(namorando)
                         membro.roles.add(registrado)
                         membro.roles.remove(naoregistrado)
                        
                        message.channel.send({embeds: [completo]})
                        proximaestadu.delete()
                     }

                     if (ticket === 'Casado1') {
    
    
                        membro.roles.add(casado)
                         membro.roles.add(registrado)
                         membro.roles.remove(naoregistrado)
                        
                        message.channel.send({embeds: [completo]})
 
                        proximaestadu.delete()
                     }

                     if (ticket === 'Enrolado1') {
    
    
                        membro.roles.add(enrolado)
                        membro.roles.add(registrado)
                        membro.roles.remove(naoregistrado)
                        
                        message.channel.send({embeds: [completo]}).then(msg => {
                            message.delete()
                            setTimeout(() => msg.delete(), 5000)
                          })
                        

                
                        proximaestadu.delete()
                     }

                })
                })
            })
        })

    }
} //criar um comando chamado: register.js
