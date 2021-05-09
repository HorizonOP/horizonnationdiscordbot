module.exports = {
    name: 'vote',
    description: "Help command.",
    execute(message, args, Discord) {
        const votEmbed = new Discord.MessageEmbed()
        .setColor('#0055FF')
        .setTitle('Vote')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Vote for Horizon Nation')
        .addFields(
            {name: 'Top.gg', value: 'Coming Sooon . Stay Tuned!'},
            {name: 'Discord Bot list', value: 'https://discordbotlist.com/bots/horizon-nation'}
       
        




        )
        .setFooter('Thanks for voting if you voted :D')
        message.channel.send(votEmbed);
    }
}
