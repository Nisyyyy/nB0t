const ms = require('ms')

module.exports.run = (bot, message, args, discord) => {
  let time = args.join(' ')
  
  if(!time) return message.reply("Please insert the time, correct usage : `!timer [5s|5m|5h]`")
  let embed = new discord.RichEmbed()
  .setTitle(`nBot Timer = ${time}`)
  .setDescription(`Okay, I'll count down to ${time} and let you know when the time is up! \n Type "stoptimer" to stop the timer!`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter("Timer")
  message.channel.send({embed: embed})
  var prefixx = "cancel"
  if (message.content.startsWith(prefixx)){
    let embed1 = new discord.RichEmbed()
  .setTitle(`Timer stopped suscesfully!`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter("Timer")
  message.channel.send(embed1)
}

  setTimeout(() => {
    embed.setDescription(`BEEP! The time's up! <@${message.author.id}>`)
    message.reply({embed: embed})
    message.author.send({embed: embed})
  }, ms(time))
}

module.exports.help = {
  name: "timer"
}
