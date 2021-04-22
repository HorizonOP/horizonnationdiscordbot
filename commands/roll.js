module.exports = {
    name: 'roll',
    description: "This is a rickroll  command",
    execute(message, args){
        message.channel.send('https://media.discordapp.net/attachments/679450620079636491/799143607856267264/image0.gif')
    }
}