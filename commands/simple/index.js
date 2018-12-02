const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const DBL = require("dblapi.js");
const ApiDBLToken = require("./ApiTokens.json");
const bot = new Discord.Client({disableEveryone: true});
const dbl = new DBL(ApiDBLToken.DBL, bot);
bot.commands = new Discord.Collection();
const dblLock = new DBL(ApiDBLToken.DBLWebhook, { webhookPort: 5000, webhookAuth: 'https://discordapp.com/api/webhooks/509798606954299405/u2CVUkpUBwDQazUZre2zm717yLNZFXbykBfQPHyp8ryCBUz8r9zlV_6VHttkhpwnGt0E' });
dblLock.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dblLock.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
  let Message = new Discord.RichEmbed()
  .setDescription(`${vote.user} Just voted for Joseph, Thanks.`)
  .setFooter("Thank you all for voting for Joseph.");
  message.channel.send(Message)
});

fs.readdir("./commands/", (err,files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("could not find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
setInterval(function() {
    bot.user.setActivity("Maintenance Mode", {type: "Playing"});
    dbl.postStats(bot.guilds.size);
//Update every 1 seconds
}, 0.2 * 1000);
});
/*
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
fs.readdir("./commands/", (err,files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("could not find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
setInterval(function() {
    bot.user.setActivity("Maintenance Mode", {type: "Playing"});
    dbl.postStats(bot.guilds.size);
//Update every 1 seconds
}, 0.5 * 1000);
bot.on('error', error => { console.error(error)});
bot.login(botconfig.token);

});

*/
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
  prefixes[message.guild.id] = {
    prefixes: botconfig.prefix};
}
let prefix = prefixes[message.guild.id].prefixes;



  //let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(!message.content.startsWith(prefix)) return;
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);
bot.on("guildCreate", () => {
console.log(`I am now in ${bot.guilds.size}`);
return
});
bot.on("guildDelete", () => {
console.log(`I am now in ${bot.guilds.size}`);
return
});
if(cmd === `${prefix}kick`){

  return;
}

if(cmd === `${prefix}ban`){

return;
}

if(cmd === `${prefix}report`){

  return;
}




if(cmd === `${prefix}serverinfo`){

}



  if(cmd === `${prefix}botinfo`){

  }})
let HexcolorsforleaveandJoin = [
  "#00fff6",
  "#6d1212",
  "#faff00",
  "#007fff",
  "#0011ff",
  "#ff00c7",
  "#7200ff",
  "#ff4c00",
  "#00ff48",
  "#050f6b",
  "#056b56",
  "#4d0363"
];

  bot.on("guildMemberRemove", member => {
    let Leavechannel = member.guild.channels.find(c => c.name === "welcome-and-goodbyes" || c.name === "join-leave-logs" || c.name === "💀welcome-channel💀" || c.name === "testing-1" || c.name === "general");
    if(!Leavechannel) return;
    let LeavetheGuildembed = new Discord.RichEmbed()
        .setColor(HexcolorsforleaveandJoin[Math.floor(Math.random() * HexcolorsforleaveandJoin.length)])
        .setAuthor(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL)
        .setFooter(`User left`)
        .setTimestamp()
    try {
      Leavechannel.send(LeavetheGuildembed);
    } catch(e) {
     console.log(`I could not send the message: ${LeavetheGuildembed}`);
    }

});
bot.on("guildMemberAdd", member => {
  let Joinchannel = member.guild.channels.find(c => c.name === "welcome-and-goodbyes" || c.name === "join-leave-logs" || c.name === "💀welcome-channel💀" || c.name === "testing-1" || c.name === "general");
  let LeavetheGuildembed = new Discord.RichEmbed()
      .setColor(HexcolorsforleaveandJoin[Math.floor(Math.random() * HexcolorsforleaveandJoin.length)])
      .setAuthor(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL)
      .setFooter(`User Joined`)
      .setTimestamp()
  try {
  Joinchannel.send(LeavetheGuildembed);
  } catch(e) {
  console.log(`I could not send the message: ${LeavetheGuildembed}`);
}
});
dbl.getBot("495593444513677320").then(bot => {
    console.log(`${bot.username} Is connected to the API of DBL`) // "Luca"
});


dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
bot.on('error', error => { console.error(error)});
bot.login(botconfig.token);
