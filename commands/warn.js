module.exports = {
    name: "warn",
    category: "utility",
    aliasses: [],
    description: {
        usage: "warn a user <why>",
        content: "warning",
    },
    execute(message, args) {

        if (message.member.permissions.has("MANAGE_MESSAGES")) {
            const reson = args[1]
            const target = message.mentions.users.first();
            if(!args[0]) return message.channel.send('Who are you warning')
            if(!args[1]) return message.channel.send('Why do you wanna warn them?')
            target.send(`You've been warned with the reason: **${reson}**`)
            message.channel.send(`<@${target.id}> has been warned with the reason: **${reson}**`)
        } else {
            message.channel.send('Nooob you aint mod')
        }
    }
}