const Discord = require("discord.js");

module.exports = {
    nombre: "skip",
    alias: [],
    descripcion: "Salta la canción a la siguiente",
    run: async (client, message, args) => {
        client.guildQueue.skip();
        message.channel.send("🚙 Skipping to: " + client.guildQueue.nowPlaying);
    }
};
