module.exports = (bot) => {
  const DBL = require('dblapi.js');
  const dbl = new DBL("NTkxNzMzMjc5NDQzNjQ4NTIy.XWMAEA.iQVDdFNAcNnhQb-5DX3zLMc-O1Y", { webhookPort: 5000, webhookAuth: process.env.whpassword });
  dbl.webhook.on('ready', hook => {
    console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
  });
  dbl.webhook.on('vote', vote => {
    if (vote.type == "test") {
      console.log("Test successful!")
    } else {
      if (vote.type == "upvote") {
        bot.channels.get('441710517460008960').send(`${vote.user} just upvoted <@${vote.bot}>!`)
      }
    }
    // Do what you need to do 
  });
}
