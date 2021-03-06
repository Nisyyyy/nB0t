const fs = require('fs')
const snekfetch = require('snekfetch')
const gdata = require("../database/mongoose/GuildData")

module.exports = (bot, guild, discord) => {
  const channel = guild.channels.find(c => c.name == "welcome")
  const modc = guild.channels.find(c => c.name == "guild-logs")
  // post new server count
  snekfetch.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
    .set('Authorization', process.env.BOT_TOKEN)
    .send({ server_count: bot.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  // Owner msg
  let member = guild.owner
  let embed = new discord.RichEmbed()
  .setTitle("Introduction to nBot")
  .addField("Heyo! Thanks for adding me.","Before you start using me, I need to get some things straight. First of all, for some basic info about me, say `!info`.")
  .addField("To see a list of commands","Say `nhelp`.", true)
  .addField("If you need to report a bug:","go to the [issue tracker](https://github.com/Nisyyyy/nb0t), or just use the `ncontact` command, and it will send a message straight to my creator.")
  .addField("Done!", "Alrighty! Now you can start using all my awesome features in your server!")
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  member.send({embed: embed})
  
  const newD = new gdata({
    guildId: guild.id,
    prefix: "!",
    isPremium: false,
    welcome: channel.id || null,
    modlog: modc.id || null,
    isBL: false
  })
  newD.save()
}
