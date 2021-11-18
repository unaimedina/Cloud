const Discord = require("discord.js");

module.exports = {
  nombre: "shuffle",
  alias: [],
  descripcion: "Aleatoriza la cola de manera automática",
  run: async (client, message, args, guildQueue) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("SHUFFLE!")
    .setThumbnail(client.user.avatarURL())
    .addField("Las canciones han sido barajadas!", " ")
    .setTimestamp()
    .setFooter(
      "Song added by " + message.author.username,
      message.author.avatarURL()
    );

    guildQueue.shuffle();
    message.channel.send(embed);
  },
};
