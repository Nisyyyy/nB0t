module.exports = (bot, config) => {
  console.log("Online and good to go baby! \n \n");
  console.log(`Bot Name: ${bot.user.username}\n \n`);
  console.log(`Bot Owner: nissy\n`);
  console.log(`Bot Developers: ${config.Developers.join(" ")}\n`);
  console.log(`~ ${bot.guilds.array().length} Servers, ${bot.channels.array().length} Channels, and ${bot.users.array().length} Users\n`);
}
