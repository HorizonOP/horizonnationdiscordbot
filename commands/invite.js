module.exports = {
    name: 'invite',
    description: "Help command.",
    execute(message, args, Discord) {
        const oldEmbed = new Discord.MessageEmbed()
        .setColor('#0055FF')
        .setTitle('Invite')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Invite Command')
        .addFields(
            {name: 'Invite Command', value: 'https://discord.com/oauth2/authorize?client_id=827475563949326376&scope=bot&permissions=0'}
       
        




        )
        .setFooter('Dev; Horizon.#7038')
        message.channel.send(oldEmbed);
    }
}
