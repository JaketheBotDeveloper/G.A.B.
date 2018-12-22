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
  hasPermission(msg) {
		if(!msg.guild) return this.client.isOwner(msg.author);
		return msg.member.hasPermission('BAN_MEMBERS') || this.client.isOwner(msg.author);
  } 

  async run(message, args)
  {if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: {args},
        }).then(() => {
          message.reply("They were banned.")
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
  }
};

module.exports = BanCommand;