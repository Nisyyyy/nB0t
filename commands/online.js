const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == "545003768350244875") {
  bot.user.setStatus(`online`)  
  let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Online!")
    .setColor("GREEN")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`This command was used at ${new Date()}`)
  message.channel.send({ embed })
 } else {
      message.channel.send("You dont have super permissions to do that!") 
  }
}

module.exports.help = {
  name: "onbot",
  usage: "",
  info: ""
}
