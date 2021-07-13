module.exports = {
    name: 'dev',
    description: "Help command.",
    execute(message, args, Discord) {
        const devEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Dev')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Developer and Support Server')
        .addFields(
            {name: 'Developer and Owner of Horizon Nation', value: 'HorizonX#0001'},
            {name: 'Join Horizon Nation Support/Dev Server', value: 'https://discord.gg/4n3mPA2u8v'}
       
        




        )
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(devEmbed);
    }
}
