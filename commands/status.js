module.exports = {
    name: 'status',
    description: "Ping pong command!",
    execute(message, args, client){
        if(!message.member.roles.cache.has('640052930682159112'))
  let type = args[0]
  let status = args.slice(1).join(" ")
  if(!args[0]) return message.channel.send("Correct usage: +status <type> <status>")
  if(!message.member.roles.cache.has('640052930682159112'))

  client.user.setActivity(`${status}`,{ type: `${type}` })
  message.channel.send(`Successfully changed my status to ${type}: "${status}"`)
    }
}