module.exports = {
    name: 'invite',
    description: "Help command.",
    execute(message, args, Discord) {
        const oldEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Invite')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Invite the bot to your server')
        .addFields(
            {name: 'Invite Link ', value: 'https://discord.com/oauth2/authorize?client_id=827475563949326376&scope=bot&permissions=134590789'}
       
        




        )
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(oldEmbed);
    }
}
