const Discord = require("discord.js");

module.exports = {
    nombre: "skip",
    alias: [],
    descripcion: "Salta la canción a la siguiente",
    run: async (client, message, args, guildQueue) => {
        guildQueue.skip();
<<<<<<< HEAD
        message.channel.send("🚙 Skipping to: " + guildQueue.songs[1]);
    }
=======
<<<<<<< HEAD
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
=======
        message.channel.send("🚙 Skipping to: " + guildQueue.songs[1]);
    }
>>>>>>> 483a116bbf42b24f66c005d4acd77ecfe954fd23
>>>>>>> Added command clerqueue and shuffle
};
