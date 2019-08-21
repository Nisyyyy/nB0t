module.exports.run = (bot, message, args, discord) => {
if (message.author.id == "545003768350244875") {
  let guildid = args.join(' ');
  bot.guilds.get(guildid).channels.first().createInvite().then(inv => bot.users.get("545003768350244875").send(`https://discord.gg/${inv.code}`))
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "geninvite"
}

