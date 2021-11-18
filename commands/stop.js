const Discord = require("discord.js");

module.exports = {
  nombre: "stop",
  alias: [],
  descripcion: "Para la música, limpia la queue y desconecta al bot",
  run: async (client, message, args, guildQueue) => {
    guildQueue.stop();
<<<<<<< HEAD
    message.channel.send("👋 Leaving, Goodbye!");
=======
<<<<<<< HEAD
    message.channel.send("Apagando... Adios 👋!");
=======
    message.channel.send("👋 Leaving, Goodbye!");
>>>>>>> 483a116bbf42b24f66c005d4acd77ecfe954fd23
>>>>>>> Added command clerqueue and shuffle
  }
};
