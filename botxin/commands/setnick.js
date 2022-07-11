var owner =" ";// sua id ;)
client.on("MessageCreate", kmosha => {
    if(kmosha.content.startsWith(prefix+"setname")){
        if(kmosha.author.id !== owner) return;
        var ds=kmosha.content.split(" ").slice(1).join(" ");
        if(!ds) return kmosha.channel.send("coloque o novo nome dele").then(m => m.delete({timeout:5000}));
        client.user.setUsername(ds);
        kmosha.channel.send(`O nome do bot foi alterado, e o novo nome é  :  ${ds}`);
           } else {
        if(kmosha.content.startsWith(prefix+"setavatar")) {
            if(kmosha.author.id !== owner) return;
            let ds=kmosha.content.split(" ")[1];
            if(!ds) return kmosha.channel.send("coloque o link da foto").then(m => m.delete({timeout:5000}));
        client.user.setAvatar(ds);
        kmosha.channel.send(`A imagem do bot foi alterada com sucesso`);
         
        }
    }
}) 