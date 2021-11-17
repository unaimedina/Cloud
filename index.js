const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
});
const config = require("./config.json");
let guildQueue;
let playlist_var;

client.config = config;
client.queue = new Map();
client.guildQueue = guildQueue;
client.playlist_var = playlist_var;

const { Player } = require("discord-music-player");
const player = new Player(client, {
  leaveOnEmpty: false,
});

client.player = player;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.player.on('playlistAdd', (queue, playlist) => 
  playlist_var = playlist
)

/* PLAYER EVENTS */
client.player
  // Emitted when channel was empty.
  .on("channelEmpty", (queue) =>
    console.log(`Everyone left the Voice Channel, queue ended.`)
  )
  // Emitted when a song was added to the queue.
  .on("songAdd", (queue, song) =>
    console.log(`Song ${song} was added to the queue.`)
  )
  // Emitted when a playlist was added to the queue.
  .on("playlistAdd", (queue, playlist) => 
    console.log(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`))
  // Emitted when there was no more music to play.
  .on("queueDestroyed", (queue) => console.log(`The queue was destroyed.`))
  // Emitted when the queue was destroyed (either by ending or stopping).
  .on("queueEnd", (queue) => console.log(`The queue has ended.`))
  // Emitted when a song changed.
  .on("songChanged", (queue, newSong, oldSong) =>
    console.log(`${newSong} is now playing.`)
  )
  // Emitted when a first song in the queue started playing.
  .on("songFirst", (queue, song) => console.log(`Started playing ${song}.`))
  // Emitted when someone disconnected the bot from the channel.
  .on("clientDisconnect", (queue) =>
    console.log(`I was kicked from the Voice Channel, queue ended.`)
  )
  // Emitted when deafenOnJoin is true and the bot was undeafened
  .on("clientUndeafen", (queue) => console.log(`I got undefeanded.`))
  // Emitted when there was an error in runtime
  .on("error", (error, queue) => {
    console.log(`Error: ${error} in ${queue.guild.name}`);
  });

client.login(config.TOKEN);
