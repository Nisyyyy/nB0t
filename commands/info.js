const pkg = require('../package.json')

module.exports.run = (bot, message, args, discord) => {
  const embed = new discord.RichEmbed()  
  .addField("Hi!", `Hello, I'm ${bot.user.username} version ${pkg.version}, a Discord bot running on NodeJS`)
  .addField(`When was I born?`,`My create date is August of 2019`)
  .addField(`Version?`,`I'm currently running on Discord.js version 12.0.0 which utilizes the latest version of Discord.js, an *unofficial* Discord library.`)
  .addField(`Creators`,`The developer of my source code is <@545003768350244875> `)
  .addField(`How to use me`,`To see what I can do, use nhelp`)
  .addField(`More!`,`My invocation method is using prefixes, currently, I only respond to messages beginning with n`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "I'll tell you some information about myself."
}
