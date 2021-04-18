const Discord = require('discord.js')
module.exports = 
{
    name: 'youtube',
    aliases: ['yt', 'utube'],
    cooldown: 0,
    usage: `.youtube`,
    description: "this is a link for youtube",
    catergory: 'other',
    permissions: [],
    execute(message, args, cmd, client, Discord)
    {
        const youtubeEmbed = new Discord.MessageEmbed()
        .setColor('#95ff00')
        .setTitle('Youtube Link')
        .setAuthor('Horizon')
        .setDescription('Youtube is Great Place')
        .addFields
        (
        {name: '\u200B', value: '\u200B'},
        {name: 'Youtube', value: 'https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w'},
        )
        .setTimestamp()
        .setFooter('Yeetus Feetus.');

        message.channel.send(youtubeEmbed)
    }
}

