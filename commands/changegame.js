const oid = "545003768350244875"

module.exports.run = (bot, message, args, discord) => {
 var game = args.join(' ')
  if (message.author.id == oid) {
   if (!game) {
    message.channel.send(`:ok_hand: Okay, I will set my activity back to normal!`)
    bot.user.setActivity(`for nhelp | ${bot.guilds.size} servers`, {type: "WATCHING"})
  } else {
    bot.user.setActivity(`${game}`, {type: "PLAYING"})
    message.channel.send(`:ok_hand: Okay, I will set my activity to '${game}'!`)
  }
  } else {
     message.channel.send("You dont have super permissions to do that!")
  } 
}

module.exports.help = {
  name: "changegame",
  usage: ``,
  information: ""
}
