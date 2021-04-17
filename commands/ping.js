module.exports = {
    name: 'ping',
    description: "Ping pong command!",
    execute(message, args){
        message.channel.send('Pong!');
    }
}