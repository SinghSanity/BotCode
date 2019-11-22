const Discord = require('discord.js');


module.exports = {
    name: 'server',
    aliases: ['guild'],
    guildOnly: true,
    description: 'Sends info about the Server!',
    execute(message, args) {
        let servericon = message.guild.iconURL;
        let joined = message.guild.joinedAt;
        let servername = message.guild.name;
        const embed = new Discord.RichEmbed()
            .setColor('#03fcba')
            .setTitle(servername)
            .setThumbnail(servericon)
            .addField("This Server's Name is:", servername)
            .addField(servername + " was Created On:", message.guild.createdAt)
            .addField("You Joined " + servername + " On:", joined)
            .addField("Total Members Here:", message.guild.memberCount);
        message.channel.send(embed);
    },
};