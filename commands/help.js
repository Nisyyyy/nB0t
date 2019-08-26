module.exports.run = (bot, message, args, discord) => {
 	let categories = ["Bot", "Moderation", "Fun", "More help", "NSFW", "Developer"]
	let fun = ["coinflip", "yesno", "chucknorris", "yomomma", "bork", "advice", "knockknock", "avatar", "snek", "stats", "timer"]
	let bota = ["uptime", "test", "leave", "perms", "say", "userinfo", "serverinfo", "ping", "@nBot", "invite", "info", "stats", "listservers", "creators", "help"]
	let mod = ["ban", "softban", "kick", "mute", "unmute", "addrole", "removerole", "purge"]
	let nsfw = ["pussy", "ass", "boobs", "dick", "fuck"]
	let developer = ["baselog", "changegame", "debug", "dnd", "offline", "online", "idle", "setnick"]
	let msg = args.join(" ")
	let em = new discord.RichEmbed()
	.setTitle("Help Menu")
	.setFooter(`New help menu! If you like it, let me know with !contact.`)
	.setColor("RANDOM")
	.setTimestamp()
	
	if (msg == categories[3].toLowerCase() || msg == categories[3]) {
		em
		.setTitle("✔ More help")
		.addField("EVEN MORE HELP?", "Do you *still* need more help? Use the `!contact` command, and I'll get to you ASAP.")
		
		message.channel.send({embed: em})
	}

		
	if (msg == categories[5].toLowerCase() || msg == categories[5]) {
		em
		.setTitle("Developer")
		.setDescription("Can be used only by the developer of the bot!")
		.addField("Developer Commands", `**${developer.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	
	if (msg == categories[2].toLowerCase() || msg == categories[2]) {
		em
		.setTitle("🍭 Fun")
		.setDescription("Let's get some fun going in this boring place!")
		.addField("Fun Commands", `**${fun.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[1].toLowerCase() || msg == categories[1]) {
		em
		.setTitle("⚒ Moderation")
		.setDescription("Let me handle the bad bois... Hehe.")
		.addField("Moderation Commands", `**${mod.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[0].toLowerCase() || msg == categories[0]) {
		em
		.setTitle("🤖 Bot")
		.setDescription(`Get to kno da wae... UMMM I mean the bot.`)
		.addField("Bot Commands", `**${bota.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[4].toLowerCase() || msg == categories[4]) {
		em
		.setTitle("🔞 NSFW")
		.setDescription(`These commands are *not* for children!`)
		.addField(`NSFW Commands`, `**${nsfw.join("\n")}**`, true) 
		
		message.channel.send({embed: em})
	}

	
	if (!msg) {
		em
		.setDescription(`**Use nhelp [category] for help on a certain category.**`)
		.setTimestamp()
		.addField("Categories", `**${categories.join("\n")}**`, true)
		.addField("Links", "[Website](http://nisyy.eu5.org) | [GitHub](https://github.com/Nisyyyy/nB0t)\n[Invite](https://discordapp.com/oauth2/authorize?client_id=585391769391202315&scope=bot&permissions=8) | [Discord](https://discord.gg/pcMjxs2)", true)
		
  	message.channel.send({embed: em})
	};
};

module.exports.help = {
  name: "help"
};
