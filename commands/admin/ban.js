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
  {
    message.reply("This is being worked on.")
  }
};

module.exports = BanCommand;
