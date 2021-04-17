const { TeamMember } = require("discord.js");
module.exports = {
    name: 'clear',
    aliasses: ['purge'],
    description: "Clear messages!",
    async execute(message, args) {
        if (message.member.permissions.has("MANAGE_MESSAGES")){
        if (!args[0]) return message.channel.send('Please enter the amount of messages to clear!');
 
        if(isNaN(args[0])) return message.channel.send('Please type a real number!');
 
        if(args[0] > 100) return message.channel.send('You cant remove more than 100 messages!');

        if(args[0] < 1) return message.channel.send('You have to delete at least one message!');
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            messages.map(m=>m.delete())
    });
 
 } else {
    message.channel.send("Only moderators can execute this command!")}
}   } 