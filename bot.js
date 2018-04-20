
const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ',
     details: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
     url: 'http://twitch.tv/Streammingg',
     state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
    application_id: '281376075802476544',
     assets: {
        small_image: `436971246245117954`,
        small_text: ' Take This ! ' ,
        large_image: `436971793421434881`,
        large_text: `Welcome To The Gate Of Hell` }

  }
    });
});

client.login(process.env.BOT_TOKEN);
