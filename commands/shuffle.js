const Discord = require("discord.js");

module.exports = {
  nombre: "shuffle",
  alias: [],
  descripcion: "Aleatoriza la cola de manera automática",
  run: async (client, message, args, guildQueue) => {
    message.delete();
    if (!guildQueue) message.reply("No hay cola!");
    else {
      guildQueue.shuffle();
      message.channel.send("Canciones flusheadas");
    }
  },
};
