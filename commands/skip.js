const Discord = require("discord.js");

module.exports = {
  nombre: "skip",
  alias: [],
  descripcion: "Salta la canción a la siguiente",
  run: async (client, message, args, guildQueue) => {
    message.delete();
    if (!guildQueue) message.reply("No hay cola!");
    else {
      guildQueue.skip();
      const embed = new Discord.MessageEmbed()
        .setTitle("Saltando... 🚙(gas)")
        .addField("Saltando de canción a:", " -> " + guildQueue.songs[1])
        .setThumbnail(client.user.avatarURL())
        .setColor("#0099ff")
        .setFooter(
          "Pedido por " + message.author.username,
          message.author.avatarURL()
        )
        .setTimestamp();
    }
  }
};
