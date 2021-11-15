module.exports = (client) => {
    console.log('Active as ' + client.user.tag)
    client.user.setActivity('🎶 - c!help', {type: 'WATCHING'});
}