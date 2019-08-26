discord = require('discord.js')
const fs = require('fs'),
config = require('../json/config.json')

module.exports.run = (bot, message, args, discord) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to ban people.")
    let reason = args.slice(1).join(" ");
    let memberr = message.mentions.members.first();
    if(!memberr) return message.reply("Please mention someone to ban!")
    memberr.ban(reason).catch(console.error)
    let embed = new discord.RichEmbed()
    .setTitle("nBot Banning System")
    .setDescription(`:wave: Successfully Banned ${memberr.displayName} for ${reason} :point_right:`)
    .setColor("RED")
    .setThumbnail(bot.user.avatarURL)
    config.banreason = reason;
    fs.writeFile('../config.json', JSON.stringify(reason), (err) => console.error)
    message.channel.send({embed})
}

module.exports.help = {
  name: "ban"
}
