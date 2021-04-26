module.exports = {
    name: 'ding',
    description: "Ping pong command!",
    execute(message, args){
        message.channel.send('Dong!');
    }
}