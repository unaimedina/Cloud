const Discord = require("discord.js");

module.exports = {
    nombre: "queue",
    alias: [],
    descripcion: "Muestra la cola de canciones.",
    run: async (client, message, args) => {
        message.channel.send("> QUEUE:")
        for (var x = 0; x < client.guildQueue.songs.length; x++) {
            message.channel.send("> " + (x+1) + " - " + client.guildQueue.songs[x]);
        }
    }
};
