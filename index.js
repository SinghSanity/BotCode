//Initial code
const Discord = require('discord.js');
const bot = new Discord.Client();

//Importing Token and Prefix from my private startup.js file
var myModule = require('./startup.js');

var token = myModule.token; // Discord bot Token

var prefix = myModule.prefix; // Discord bot Prefix

//Log message when it turns on successfully. 

bot.on('ready', () => {
    console.log('This bot is online!');
})

// Text Stuff 1
// Will move this on to another file in the future
/*
bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) {
        //Basic commands
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

            //Clear Command (need to give bot admin to do so)
        case 'clear':
            if (!args[1]) {
                return message.channel.sendMessage('Tell me how many messages to clear, yo');
            }
            message.channel.bulkDelete(args[1]);
            break;

    }
})
*/

bot.on('message', message => {

    if (message.content === prefix + 'ping') {
        message.channel.sendMessage('pong!');
    }
    if (message.content === prefix + 'pong') {
        message.channel.sendMessage('ping!');
    }
    if (message.content === prefix + 'version') {
        message.channel.sendMessage('I am currently on Beta 1.0.0');
    }
    if (message.content === prefix + 'help') {
        message.channel.sendMessage('I also need help, but no one ever does');
    }
    if (message.content === prefix + 'server') {
        message.channel.sendMessage("This server's name is " + message.guild.name +
            ". There are " + message.guild.memberCount + " people here.");
    }
    if (message.content === prefix + 'clear') {



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