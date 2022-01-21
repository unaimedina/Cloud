const Discord = require("discord.js");

module.exports = {
  nombre: "play",
  alias: [],
  descripcion: "Reproducir comando",
  run: async (client, message, args, guildQueue) => {
    message.delete();
    if (!message.member.voice.channel) return message.reply("No estás conectado en una sala de voz!");
    if (args.length == 0) message.reply("No has especificado canción/playlist!")
    else {
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
        .setTitle("NUEVA PLAYLIST AÑADIDA!")
        .setThumbnail(client.user.avatarURL())
        .addFields(
          { name: "Nombre:", value: song.name },
          { name: "Duración:", value: convert(playlist_duration) + "" },
          { name: "Canciones:", value: song.songs.length + " canciones" }
        )
        .setTimestamp()
        .setFooter(
          "Playlist añadida por " + message.author.username,
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
        .setTitle("¡NUEVA CANCION AÑADIDA!")
        .setThumbnail(client.user.avatarURL())
        .addFields(
          { name: "Canción:", value: song.name },
          { name: "Duración:", value: song.duration }
        )
        .setTimestamp()
        .setFooter(
          "Canción añadida por " + message.author.username,
          message.author.avatarURL()
        );

      message.channel.send({ embeds: [embed] });
    }
    }
  } 
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
