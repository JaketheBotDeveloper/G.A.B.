const Commando = require('discord.js-commando');

const bot = new Commando.Client({
    owner: '344217669450596363'
});
//Need to add Jake soon.
//Need to add a || to add Jake
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

global.currentTeamMembers = [];
global.servers = {};

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
  setInterval(function() {
      bot.user.setActivity(`With ${bot.guilds.size} Servers | !help for help`, {type: "Playing"});
  //Update every 1 seconds
  }, 1 * 1000);
  });

if(err) {
  console.log(err);
  throw err;
};



bot.login(process.env.token);
