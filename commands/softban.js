module.exports.run = (bot, message, args, discord) => {
  let memberr = message.mentions.members.first();
  let reason = args.join(' ');
  if (memberr.displayName) {
    memberr.ban(reason)
    message.channel.send(`Alright, I softbanned ${memberr.displayName}!`).then(m => m.delete(5000))
    message.guild.unban(memberr.id)
  } else {
    memberr.ban(reason)
    message.channel.send(`Alright, I just softbanned ${memberr.username}!`).then(m => m.delete(5000))
    message.guild.unban(memberr.id)
  }
}

module.exports.help = {
  name: "softban"
}
