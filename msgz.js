const Discord = require('discord.js');
const bot = new Discord.Client();

var myModule = require('./startup.js');

var token = myModule.token; // Discord bot Token

var prefix = myModule.prefix; // Discord bot Prefix

bot.on('ready', () => {
    console.log('MSGZ work!'); // Messages the console saying its online.
})
bot.on('message', message => {

    //These are Text-Based commands, meaning they only deal with sending/recieving messages. No depth

    if (message.content === prefix + 'ping') {
        message.channel.sendMessage('pong!');
    }
    if (message.content === prefix + 'pong') {
        message.channel.sendMessage('ping!');
    }
    if (message.content === prefix + 'help') {
        message.channel.sendMessage('I also need help, but no one ever does');
    }

    if (message.content === prefix + 'yo' || message.content === prefix + 'Yo') {
        message.channel.sendMessage("> Yo");
    }

})

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


bot.login(token)