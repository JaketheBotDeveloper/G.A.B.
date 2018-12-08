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
      message.reply("This is being worked on")
    }
  }
module.exports = KickCommand;
