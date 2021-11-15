const Discord = require("discord.js");

module.exports = {
  nombre: "play",
  alias: [],
  descripcion: "Reproducir comando",
  run: async (client, message, args) => {

    if (args[0].includes("playlist")) {
      let queue = client.player.createQueue(message.guild.id);
      await queue.join(message.member.voice.channel);
      let song = await queue.playlist(args.join(' ')).catch(_ => {
          if(!guildQueue)
              queue.stop();
      });

      message.channel.send("Playlist '" + song.name + "'")
    } else {
      let queue = client.player.createQueue(message.guild.id);
      await queue.join(message.member.voice.channel);
  
      let song = await queue.play(args.join(" ")).catch((_) => {
        if (!client.guildQueue) queue.stop();
      });

      const exampleEmbed = new Discord.MessageEmbed()
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

    await message.channel.send("Queue:");
    // for (var x = 0; x < queue.songs.length; x++) await message.channel.send(queue.songs[x] + ".");

    message.channel.send({ embeds: [exampleEmbed] });
    }
    
  },
};
