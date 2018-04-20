

const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
  client.user.setGame(`Welcome To The Gate of Hell !`,`www.twitch.tv/mrali__`);
});
NDAzNjgyNTUyODQ3Nzk0MTc2.DaUG4g.dopLO-GU5EqiOK72RzMg7cvddfA



client.login(process.env.BOT_TOKEN);
