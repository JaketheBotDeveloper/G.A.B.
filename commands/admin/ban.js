const commando = require('discord.js-commando');
const Discord = require("discord.js");
class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'This is a command to bans a user from a server. **ADMIN ONLY**'
        });
    }

    async run(message, args)
    {

      let usernotfound = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "We could not find that user.")
      .setTimestamp();

      let nopermision = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "You don't have the BAN_MEMBERS Permision")
      .setTimestamp();

      let cantbebanned = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "The user that you want to ban has permissions")
      .setTimestamp();

      let cantfindchannel = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "there is No #incidents Channel please make one.")
      .setTimestamp();

      let cantban = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "The bot does not have permision to ban people.")
      .setTimestamp();

        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(usernotfound);
        let bReason = args.join(" ").slice(22);
        if(!bReason) return message.channel.send();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(nopermision);
        if(bUser.hasPermision("KICK_MEMBERS") || bUser.hasPermision("BAN_MEMBERS")) return message.channel.send(cantbebanned);
      let Messageuser = message.author.tag;
        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#00ff3f")
        .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason)

        let banChannel = message.guild.channels.find(`name`, "incidents");
        if(!banChannel) return message.channel.send(cantfindchannel);
      try {
        message.guild.member(bUser).ban(bReason + ` Banned by: ${Messageuser}`);
        banChannel.send(banEmbed);
      } catch(e) {
        message.channel.send(cantban);
      }

      };

    }


module.exports = BanCommand;
