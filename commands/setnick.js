module.exports.run = (bot, message, args, discord) => {
if (message.author.id == "545003768350244875") {
    let newname = args.join(' ')
    bot.user.setUsername(newname)
  
    message.channel.send(`Okay, I set my username to ${newname}!`).then(m => {
      message.delete(100)
      m.delete(10000)
    })
    } else {
      message.channel.send("You dont have super permissions to do that!")
    }
}

module.exports.help = {
  name: "setnick"
}
