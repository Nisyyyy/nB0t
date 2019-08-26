let oid = "612765962625875985"
let config = require('../json/config.json')


module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ')
    let embed = new discord.RichEmbed()
    .setTitle(`Contact System`)
    .setDescription(mes)
    .setColor(`BLUE`)
    .setFooter(`This message was sent by ${message.author.tag}`)
    .setThumbnail(bot.user.avatarURL)
    bot.channels.find('id','612765962625875985').send({ embed })
    message.reply("Done!").then(m => m.delete(10000))
}

module.exports.help = {
    name: "contact"
}
