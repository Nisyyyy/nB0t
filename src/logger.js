const discord = require('discord.js');
bot = new discord.Client()
let logchannel = bot.channels.find("name", "logs");

async function baselogger(bot, desc, icon) {
  let messages = await logchannel.fetchMessages({limit: 5});
  let log = messages.filter(m => m.author.id === bot.user.id &&
    m.embeds[0] &&
    m.embeds[0].type === 'rich' &&
    m.embeds[0].footer &&
    m.embeds[0].footer.text.startsWith('Case')
  ).first();
  var thisCase = 0
  var foot = ``
  if (log) {
    thisCase = /Case\s(\d+)/.exec(log.embeds[0].footer.text);
    foot = `Case ${parseInt(thisCase[1]) + 1}`
  } else {
    foot = `Case 1`
  }
  const thumburi = icon || ""
  let embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`Nissy Logs ✍`, bot.user.avatarURL)
    .setThumbnail(thumburi)
    .setColor("ff3333")
    .setDescription(desc)
    .setFooter(foot);
  
  logchannel.send({embed});
};

module.exports = {baselogger};
