module.exports = {
    name: 'youtube',
    description: "This is a youtube command",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCJtbyCHmt_TAa9RxgC2aA8w')
    }
}