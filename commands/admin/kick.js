const commando = require('discord.js-commando');
const Discord = require("discord.js")
class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'This is a command to Kick a user from a server. **ADMIN ONLY**'
        });
    }

    async run(message, args)
    {

      let cantfindchannel = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "there is No #incidents Channel please make one.")
      .setTimestamp();

      let nopermision = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "You don't have permision to kick users.")
      .setTimestamp();

      let Userhaspermision = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "That user has permisions")
      .setTimestamp();

      let cantkick = new Discord.RichEmbed()
      .setDescription("Error")
      .setColor("#00ff3f")
      .addField("You got this error because: ", "The Bot does not have permision to kick")
      .setTimestamp();

      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Can't find that user!")
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermision);
      if(kUser.hasPermision("KICK_MEMBERS") || kUser.hasPermision("BAN_MEMBERS")) return message.channel.send(Userhaspermision);
    let messageuser = message.author.tag;
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#00ff3f")
      .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason)

      let kickChannel = message.guild.channels.find(`name`, "incidents");
      if(!kickChannel) return message.channel.send(cantfindchannel);
    try {
      message.guild.member(kUser).kick(kReason + ` Kicked by: ${messageuser}`);
      kickChannel.send(kickEmbed);
    } catch(e) {
      message.channel.send(cantkick);
    }
          };
    }

module.exports = KickCommand;
