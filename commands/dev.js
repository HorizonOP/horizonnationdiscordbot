module.exports = {
    name: 'dev',
    description: "Help command.",
    execute(message, args, Discord) {
        const devEmbed = new Discord.MessageEmbed()
        .setColor('#0055FF')
        .setTitle('Dev')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Developer and Support Server')
        .addFields(
            {name: 'Developer and Owner of Horizon Nation', value: 'Myst HoriZon#7038'},
            {name: 'Join Horizon Nation Support/Dev Server', value: 'https://discord.gg/4n3mPA2u8v'}
       
        




        )
        .setFooter('POG CHAMP v1.0 Very Very Soon')
        message.channel.send(devEmbed);
    }
}
