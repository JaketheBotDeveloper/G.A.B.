const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the channel the commander is in and stops the music.'
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect()
            {
                message.reply("I have left the Channel.")
            }
        }
        else
        {
            message.reply("I must be in a Voice Channel to leave one. 🤷")
        }
    }
}

module.exports = LeaveChannelCommand;