const moment = require('moment');
module.exports = {
    name: 'whois',
    aliases: ['userinfo', 'user'],
    permissions: [],
    description: 'Userinfo of mentioned user/id or if no one mentioned then yours.',
    async execute(message, args, cmd, client, Discord) {
        let member = message.member;
        if(args[0]) member = await message.guild.members.fetch(args[0]).catch(()=>null) || message.mentions.members.first()|| message.member;

        const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
        
        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const created = Math.floor(y / 86400000);
        const joined = Math.floor(y / 86400000);

        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");


        const userEmbed = new Discord.MessageEmbed()
            .setAuthor(`${member.user.username}`, member.user.displayAvatarURL({ dynamic: true})) 
            .setColor(member.displayHexColor)
            .addField(`**Username: **`, member.user.username, true)
            .addField(`**Tag: **`, `${member.user.discriminator}`, true) 
            .addField(`**ID: **`, `${member.id}`, true) 
            .addField("Account Created On:", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`)
            .addField(`**Joined The Server at: **`, `${joineddate}`, true)
            .addField(`Roles: **[${roles.length}]**`, `${roles}`)
            .setTimestamp()
            .setFooter('Bot Coded By Horizon')
        
        message.channel.send(userEmbed);
    
    }

}