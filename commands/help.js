const Discord = require("discord.js");
const fs = require("fs");

var timeout = false;

module.exports = {
  nombre: "help",
  alias: [],
  descripcion: "Muestra el mensaje de ayuda",
  run: async (client, message, args, guildQueue) => {
    message.delete();

    if (timeout) return message.channel.send("<@" + message.author + ">, el comando está en cooldown!").then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
    })

    var comandosnombre = [];
    var comandosdesc = [];

    message.channel.send("**COMANDOS DEL BOT**").then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 50000)
    })
    fs.readdir("./commands", (err, files) => {
      if (err) return console.error(err);
      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./${file}`);
        message.channel.send("> c!" + props.nombre + " - " + props.descripcion).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 50000)
        });
      });
    });

    timeout = true;
    setTimeout(() => {
      timeout = false;
    }, 50000)
  }
};
