//Initial code
const Discord = require('discord.js');
const bot = new Discord.Client();

//Importing Token and Prefix from my private startup.js file
var myModule = require('./startup.js');

// Future Will move commands into different folders. Found a very helpful video that I will be using as a reference. Stay tuned!

var prefix = myModule.prefix; // Discord bot Prefix

var version = "Beta 1.1.0" // Current Version number

msgz = require('./msgz.js')

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //These are Text-Based commands, meaning they only deal with sending/recieving messages. No depth

    if (command === 'version') {
        message.channel.sendMessage('I am currently on ' + version);
    }
    //More complex commands. Send messages, but deal with other discord stuff and some functions as well.

    if (command === 'server') {
        message.channel.sendMessage("This server's name is " + message.guild.name +
            ". There are " + message.guild.memberCount + " people here.");
    }
    if (command === 'me') {
        message.channel.sendMessage("You are " + message.author.username);
    }
    if (command === 'coin' || command === 'flip') {
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

//Log message when it turns on successfully. 

bot.on('ready', () => {
    console.log('This bot is online!'); // Messages the console saying its online.
    bot.user.setGame("Spooky Doggo Borks"); // Plays a game!
})


//Logging in
bot.login(myModule.token)