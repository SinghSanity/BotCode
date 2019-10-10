//Initial code
const Discord = require('discord.js');
const bot = new Discord.Client();

//Importing Token and Prefix from my private startup.js file
var myModule = require('./startup.js');

var token = myModule.token; // Discord bot Token

var prefix = myModule.prefix; // Discord bot Prefix

var version = "Beta 1.0.0" // Current Version number

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

    //These are Text-Based commands, meaning they only deal with sending/recieving messages. No depth

    if (message.content === prefix + 'ping') {
        message.channel.sendMessage('pong!');
    }
    if (message.content === prefix + 'pong') {
        message.channel.sendMessage('ping!');
    }
    if (message.content === prefix + 'version') {
        message.channel.sendMessage('I am currently on ' + version);
    }
    if (message.content === prefix + 'help') {
        message.channel.sendMessage('I also need help, but no one ever does');
    }

    if (message.content === prefix + 'yo' || message.content === prefix + 'Yo') {
        message.channel.sendMessage("> Yo");
    }

    //More complex commands. Send messages, but deal with other discord stuff and some functions as well.

    if (message.content === prefix + 'server') {
        message.channel.sendMessage("This server's name is " + message.guild.name +
            ". There are " + message.guild.memberCount + " people here.");
    }
    if (message.content === prefix + 'me') {
        message.channel.sendMessage("You are " + message.author.username);
    }
    if (message.content === prefix + 'coin' || message.content === prefix + 'flip') {
        message.channel.sendMessage((Math.floor(Math.random() * 2) == 0) ? '> heads' : '> tails');
    }

    /*
    Future Command will send a picture of your avatar.
    if (message.content === prefix + 'avatar') {
        message.channel.sendMessage();
    }

    Future Command will chose a random number from 1 to x (!pick x), if not x, then 10, 100, 1000, etc.

    Future Command will send some profile stuff as an embed (maybe)

    Future Command will let server owner and mods to change prefix (Eventually, but not anytime soon)
    */

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


//Logging in
bot.login(token)