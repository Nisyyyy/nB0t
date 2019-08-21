const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("nBot Invitation")
  .setDescription(`I can't use invite links.\nHere's an OAuth2 link instead! Click [here](https://discordapp.com/oauth2/authorize?client_id=585391769391202315&scope=bot&permissions=8) to invite me!`)
  .setColor("GREEN")
  .setFooter(`Invite Command`)
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "invite"
}
