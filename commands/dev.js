module.exports = {
    name: 'dev',
    description: "Help command.",
    execute(message, args, Discord) {
        const devEmbed = new Discord.MessageEmbed()
        .setColor('#0055FF')
        .setTitle('Invite')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('Invite the bot to your server')
        .addFields(
            {name: 'Developer and Owner of Horizon Nation', value: 'Horizon.#7038'},
            {name: 'Join Horizon Nation Support/Dev Server', value: 'https://discord.gg/4n3mPA2u8v'}
       
        




        )
        .setFooter('Dev; Horizon.#7038')
        message.channel.send(devEmbed);
    }
}
