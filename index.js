//Initial code
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    bot.commands.set(command.name, command);
}

//Importing Token and Prefix from my private startup.js file

const { prefix, token } = require('./startup.js');

msgz = require('./msgz.js') // Few extra Messages on a separate file. All text-based. 


bot.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) ||
        bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
        return message.channel.send(`You need to give arguments, ${message.author}!`);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('OH MY GOD! There was an error trying to execute that command!');
    }

});
// Include this on every file in commands. 
/*
module.exports = {
    name: 'INSERT NAME',
    aliases: ['INSERT OTHER NAME', 'INSERT MORE NAME'],
    description: 'INSERT DESCRIPTION',
    execute(message, args) {
        message.channel.send('INSERT MESSAGE');
    },
};
*/



//Log message when it turns on successfully. 

bot.on('ready', () => {
    console.log('This bot is online!'); // Messages the console saying its online.

    // Plays a game!
    bot.user.setPresence({
        status: 'online',
        game: {
            name: "Thankful Doggo Borks",
            type: "PLAYING"
        }
    });
})


//Logging in
bot.login(token)