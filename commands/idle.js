const oid = "545003768350244875"

module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`idle`)
    let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Idle!")
    .setThumbnail(bot.user.avatarURL)
    .setColor(255,255,0)
    .setFooter(`This command was at ${new Date()}`)
    message.channel.send({ embed })
  } else {
    message.channel.send("You dont have super permissions to do that!")
  }
}

module.exports.help = {
  name: "idlebot",
  usage: ``,
  info: ""
}
