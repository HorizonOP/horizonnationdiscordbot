const { MessageEmbed } = require("discord.js");
const moment = require("moment")
module.exports = {
  name: "userinfo",
  description: "Information about a user",
  category: "fun",
  run: async (message, args, Discord) => {
	let user;
if (msg.mentions.users.first()) {
    user = msg.mentions.users.first();
} else {
    user = msg.author;
}
var member = user;


    const embeduserinfo = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(msg.author.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Permissions:", `${user.permissions}`, true)
    .addField("Nickname:", `${user.id.displayName}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", msg.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .setFooter(`Replying to ${msg.author.username}#${msg.author.discriminator}`)
	msg.channel.send(embeduserinfo)

  }
  
};