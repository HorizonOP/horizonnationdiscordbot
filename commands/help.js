module.exports = {
    name: 'help',
    description: "Help command.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0055FF')
        .setTitle('Help')
        .setURL('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
        .setDescription('prefix = h!')
        .addFields(
        {name: 'Youtube Command', value: 'h!youtube'},
        {name: 'Music Commands', value: 'h!play , h!leave'},
        {name: 'Ping Command', value: 'h!ping'},
        {name: 'Invite the bot to ur server', value: 'h!invite'},
        {name: 'Avatar Command', value: 'h!avatar or h!avatar Mention a user'},
        {name: 'Moderator Commands', value: 'h!warn , h!clear '},
        {name: 'Roll . Try it Your self', value: 'h!r'},
        {name: 'Developer of the bot', value: 'h!dev'},
        {name: 'Fun Commands', value: 'h!ding , h!kill , h!punch'}
        
        
        




        )
        .setImage('https://media.giphy.com/media/aiywpnnvQBmRFge7Vu/giphy.gif')
        .setFooter('This command is still in construction as the bot is not completely ready yet')
        message.channel.send(newEmbed);
    }
}
