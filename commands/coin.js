module.exports = {
    name: 'coin',
    aliases: ['flip'],
    description: 'Flip a coin!',
    execute(message, args) {
        message.channel.send((Math.floor(Math.random() * 2) == 0) ? '> heads' : '> tails');
    },
};