const { version } = require('../startup.js');

module.exports = {
    name: 'version',
    description: 'Get Version',
    execute(message, args) {
        message.channel.send('I am currently on ' + version);
    },
};