module.exports = (bot, guild, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("nBot's Final Message.")
  .setDescription("Aw, sorry you weren't satisfied with me... Please tell my creator what's wrong by saying `!contact msg`, or just going to https://github.com/FHGDev/JSnBot/issues/new. Thanks!")
  .setAuthor(bot.user.username)
  .setTimestamp()
  .setColor("RED")
  bot.users.get(guild.ownerID).send({ embed })
}
