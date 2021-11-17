const Discord = require("discord.js");

module.exports = {
  nombre: "play",
  alias: [],
  descripcion: "Reproducir comando",
  run: async (client, message, args, guildQueue) => {
    if (args[0].includes("playlist")) {
      let queue = client.player.createQueue(message.guild.id);
      await queue.join(message.member.voice.channel);

      let song = await queue.playlist(args.join(" ")).catch((_) => {
        if (!guildQueue) queue.stop();
      });

      var playlist_duration = 0;

      for (var y = 0; y < song.songs.length; y++) {
        playlist_duration = parseInt(playlist_duration + song.songs[y].milliseconds);
      }

      const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("NEW PLAYLIST ADDED!")
        .setThumbnail(client.user.avatarURL())
        .addFields(
          { name: "Nombre:", value: song.name },
          { name: "Duración:", value: convert(playlist_duration) + "" },
          { name: "Canciones:", value: song.songs.length + " canciones" }
        )
        .setTimestamp()
        .setFooter(
          "Song added by " + message.author.username,
          message.author.avatarURL()
        );

      message.channel.send({ embeds: [embed] });

    } else {
      let queue = client.player.createQueue(message.guild.id);
      await queue.join(message.member.voice.channel);

      let song = await queue.play(args.join(" ")).catch((_) => {
        if (!guildQueue) queue.stop();
      });

      const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("NEW SONG ADDED!")
        .setThumbnail(client.user.avatarURL())
        .addFields(
          { name: "Song name:", value: song.name },
          { name: "Song duration:", value: song.duration }
        )
        .setTimestamp()
        .setFooter(
          "Song added by " + message.author.username,
          message.author.avatarURL()
        );

      message.channel.send({ embeds: [embed] });
    }
  },
};

function convert(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}
