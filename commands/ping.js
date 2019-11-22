module.exports = {
    name: 'ping',
    aliases: ['Ping'],
    description: 'Ping!',
    execute(message, args) {
        message.channel.send('pong!');
    },
};