module.exports.run = (bot, message, args, discord) => {
  bot.guilds.forEach(async ga => {
    let ids = ga.id
    let em = new discord.RichEmbed()
    .setTitle("nBot Server IDs")
    .setDescription(`All my server ids are ${ids}`)
    .setAuthor("nBot")
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .setTimestamp()
    message.channel.send({embed: em})
  })
}

module.exports.help = {
  name: "serverids"
}
