//Initial code
const Discord = require('discord.js');
const bot = new Discord.Client();

//Importing Token from my private token.js file
var myModule = require('./token');
var token = myModule.token;

//Discord bot Prefix
const Prefix = '$$';

//Log message when it turns on successfully. 
bot.on('ready', () => {
    console.log('This bot is online!');
})

//Text Stuff 1

bot.on('message', message => {

    let args = message.content.substring(Prefix.length).split(" ");
    switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
        case 'pong':
            message.channel.sendMessage('ping!');
            break;
        case 'version':
            message.channel.sendMessage('I am currently on Beta 1.0');
            break;
        case 'help':
            message.channel.sendMessage("You don't need help, yet");
            break;

    }
})

bot.on('message', msg => {
    if (msg.content === "HELLO") {
        msg.reply("HELLO FRIEND!");
    }

    if (msg.content === "yo" || msg.content === "Yo") {
        msg.reply("yo");
    }

    if (msg.content === "hey" || msg.content === "Hey") {
        msg.reply("hey");
    }

    if (msg.content === "hello" || msg.content === "Hello") {
        msg.reply("hello");
    }


})


//Logging in
bot.login(token)