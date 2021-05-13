const { TeamMember } = require("discord.js");
module.exports = {
    name: 'clear',
    aliasses: ['purge'],
    description: "Clear messages!",
    async execute(message, args) {
        if (message.member.permissions.has("MANAGE_MESSAGES")){
        if (!args[0]) return message.channel.send('Do you want to remove null messages? Have some common sense dude!');
 
        if(isNaN(args[0])) return message.channel.send('Type a real Number u idiot');
 
        if(args[0] > 100) return message.channel.send('Noob You cant remove more than 100 messages');

        if(args[0] < 1) return message.channel.send('how can i remove 0 messages?');
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            messages.map(m=>m.delete())
    });
 
 } else {
    message.channel.send("Noob you aint mod")}
}   } 