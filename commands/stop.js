const Discord = require("discord.js");

module.exports = {
  nombre: "stop",
  alias: [],
  descripcion: "Para la música, limpia la queue y desconecta al bot",
  run: async (client, message, args, guildQueue) => {
    message.delete();
    if (!guildQueue) message.reply("No hay cola!");
    else {
      guildQueue.stop();
      message.channel.send("Apagando... Adios 👋!");
    }
  }
};
