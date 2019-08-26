module.exports.run = (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No permissions pal!");

 message.delete()
 message.channel.send(args.join(' '))
}

module.exports.help = {
  name: "say",
  usage: ``,
  information: ""
}
