module.exports = {
    name: 'invite',
    description: "This is a invite command",
    execute(message, args){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=827475563949326376&scope=bot&permissions=0  Invite Link of the bot')
    }
}