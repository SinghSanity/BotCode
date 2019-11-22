module.exports = {
    name: 'pong',
    aliases: ['Pong'],
    description: 'Pong!',
    execute(message, args) {
        message.channel.send('ping!');
    },
};