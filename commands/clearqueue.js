const Discord = require("discord.js");

module.exports = {
    nombre: "clearqueue",
    alias: [],
    descripcion: "Borra la cola.",
    run: async (client, message, args, guildQueue) => {
        message.delete();
        if (!guildQueue) message.reply("No hay cola!");
        else {
          guildQueue.clearQueue();
          
          message.channel.send("> La cola ha sido borrada!");
        }
    },
};
