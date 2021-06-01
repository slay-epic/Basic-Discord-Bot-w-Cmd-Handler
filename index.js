const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs")
const config = require("./config.json")

client.login(config.token)
client.commands = new discord.Collection()
const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require('./commands/' + file);

	client.commands.set(command.name, command);
}
client.on("ready",()=>console.log(`Logged in as ${client.user.tag}`))

client.on("message",msg=>{
  if (msg.author.bot || !msg.content.startsWith(config.prefix) || msg.channel.type==="dm") return;
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd);
  if (command) {
    command.run(msg,args,client,discord)
  }
})
