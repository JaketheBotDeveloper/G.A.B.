const commando = require('discord.js-commando');
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
    const user = message.mentions.users.first();
    if (user) {
      {if (!message.member.hasPermission("BAN_MEMBERS"));
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    }}
    else 
    {
      message.reply("You don't have that permission");
    }
    } else {
      message.reply('You didn\'t mention the user to ban or you dont have permission');
    }
  }
};

module.exports = BanCommand;
