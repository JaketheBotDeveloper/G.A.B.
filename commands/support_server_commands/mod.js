const commando = require('discord.js-commando');

class ModCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mod',
            group: 'support_server_commands',
            memberName: 'mod',
            description: 'Gives someone mod in the support server. **Only to be used in the Support Server**'
        });
    }

    
    async run(message, args)
    {
        if(guildID = "518272918744989696")
        {
       message.reply("This is coming soon!")
        } else
        {
            message.reply("This command only works in the Support Server.")
        }
    }
}

module.exports = ModCommand;