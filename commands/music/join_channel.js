const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the channel the commander is in'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
       {
         if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                . then(connection =>{
                    message.reply("🎤 Successfully Joined! 🎤")
                });
            }
        }
        else
        {
            message.reply("🎤 You must be in a Voice Channel to call me in or I am not able to join that place. 🎤")
        }
    }
}

module.exports = JoinChannelCommand;