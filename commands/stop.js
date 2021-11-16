const Discord = require("discord.js");

module.exports = {
  nombre: "stop",
  alias: [],
  descripcion: "Para la música, limpia la queue y desconecta al bot",
  run: async (client, message, args) => {
    client.guildQueue.stop();
    message.channel.send("👋 Leaving, Goodbye!");
  }
};
