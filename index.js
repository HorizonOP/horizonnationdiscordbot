const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require 	('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}
const prefix = '!';


client.once('ready', () => {
	console.log('Horizon Nation is Online!');
})


client.on('guildMemberAdd', (memeber) => {
	let welcomeRole	= Discord.GuildMember.guild.roles.cache.find(role => role.name === 'Members');

	guildMember.roles.add(welcomeRole);
	guildMember.guild.channels.cache.get('737254223460433930').send(`Welcome <@${guildMember.user.id}> to our server . Have a great Time here boi`)
})

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return
	console.log(message.content, client.commands);
	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);

		
	
	} 
	 
	
	else if (command === 'youtube'){
		client.commands.get('youtube').execute(message, args );
		
	}
	else if (command ==='avatar'){
		client.commands.get('avatar').execute(message, args, Discord)
	}
	else if (command === "clear") {
		client.commands.get("clear").execute(message, args)
		}	
			else if (command === "warn") {
				client.commands.get("warn").execute(message, args)
			}
			else if (command === 'play'){
				client.commands.get('play').execute(message, args)
			}
			else if (command ==='leave'){
				client.commands.get('leave').execute(message, args)
			}
		else if (command === 'help'){
			client.commands.get('help').execute(message, args, Discord);
		}
		else if (command ==='invite'){
			client.commands.get('invite').execute(message, args, Discord);
		}
		else if(command ==='status'){
			client.commands.get('status').execute(message, args, client)
		}
		else if (command ==='r'){
			client.commands.get('roll').execute(message, args)
		}
		else if (command ==='dev'){
			client.commands.get('dev').execute(message, args, Discord);
		}
		else if (command ==='ding'){
			client.commands.get('ding').execute(message, args)
		}
		else if (command ==='kill'){
			client.commands.get('kill').execute(message, args)
		}
		else if (command ==='punch'){
			client.commands.get('punch').execute(message, args)
		}
		
		

		

});



client.login(process.env.token);

