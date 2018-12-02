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
    {if (!message.guild) return;
    
      if (message.content.startsWith('!ban')) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have permision");
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.ban({
              reason: (args),
            }).then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            }).catch(err => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
          } else {
            message.reply('That user isn\'t in this guild!');
          }
        } else {
          message.reply('You didnt mention the user to ban!');
        }
      }
    };
  };
module.exports = BanCommand;
