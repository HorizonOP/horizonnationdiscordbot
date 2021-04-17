module.exports = {
    name: 'help',
    description: "Help command.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0055FF')
        .setTitle('Help')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Help Command')
        .addFields(
        {name: 'Youtube Command', value: '!youtube'},
        {name: 'Music Commands', value: '!play , !leave'},
        {name: 'Ping Command', value: '!ping'},
        {name: 'Invite the bot to ur server', value: '!invite'}



        )
        .setFooter('This command is still in construction as the bot is not completely ready yet')
        message.channel.send(newEmbed);
    }
}
