const Discord = require("discord.js");

module.exports = {
    nombre: "clearqueue",
    alias: [],
    descripcion: "Borra la cola.",
    run: async (client, message, args, guildQueue) => {
        const embed = new Discord.MessageEmbed()
        .setDescription("La cola ha sido borrada!")
        .setTimestamp();
        
        guildQueue.clearQueue();
        message.channel.send(embed);
    },
};
