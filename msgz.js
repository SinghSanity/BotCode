const Discord = require('discord.js');
const bot = new Discord.Client();

var myModule = require('./startup.js');

var prefix = myModule.prefix; // Discord bot Prefix

bot.on('ready', () => {
    console.log('MSGZ work!'); // Messages the console saying its online.
})
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //These are Text-Based commands, meaning they only deal with sending/recieving messages. No depth

    if (command === 'ping') {
        message.channel.sendMessage('pong!');
    }
    if (command === 'pong') {
        message.channel.sendMessage('ping!');
    }
    if (command === 'help') {
        message.channel.sendMessage('I also need help, but no one ever does');
    }

    if (command === 'yo') {
        message.channel.sendMessage("> Yo");
    }
})

// Miscellaneous commands
bot.on('message', message => {
    if (message.content === "HELLO") {
        message.reply("HELLO FRIEND!");
    }

    if (message.content === "yo" || message.content === "Yo") {
        message.reply("yo");
    }

    if (message.content === "hey" || message.content === "Hey") {
        message.reply("hey");
    }

    if (message.content === "hello" || message.content === "Hello") {
        message.reply("hello");
    }
})


bot.login(myModule.token)