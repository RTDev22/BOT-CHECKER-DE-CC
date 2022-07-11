if(message.author.id !== owner) return;
            let ds = args[0];
            if(!ds) return message.channel.send("coloque o link da foto").then(m => m.delete({timeout:5000}));
        client.user.setAvatar(ds);
        message.channel.send(`A imagem do bot foi alterada com sucesso`);