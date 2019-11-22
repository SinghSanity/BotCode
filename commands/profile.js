module.exports = {
    name: 'profile',
    aliases: ['me', 'mp'],
    description: 'Sends Your Profile!',
    execute(message, args) {
        message.channel.send('Haha! You are a nobody!');
    },
};