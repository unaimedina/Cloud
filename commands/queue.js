const Discord = require("discord.js");

module.exports = {
  nombre: "queue",
  alias: [],
  descripcion: "Muestra la cola de canciones.",
  run: async (client, message, args, guildQueue) => {
    if (guildQueue != null) {
      message.channel.send("> **COLA:**");
      for (var x = 0; x < guildQueue.songs.length; x++) {
        message.channel.send("> " + (x + 1) + " - " + guildQueue.songs[x]);
        if (x >= 2) break; // Integer -1 (Empieza en 0)
      }
      if (guildQueue.songs.length >= 3) {
        message.channel.send(
          "> y **" + (guildQueue.songs.length - 3) + " canciones** más."
        );
      }
    } else {
      message.channel.send("No hay cola!");
    }
  },
};
