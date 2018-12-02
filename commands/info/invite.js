const commando = require('discord.js-commando');
const Discord = require('discord.js');
class InviteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'invite',
            group: 'info',
            memberName: 'invite',
            description: 'Says the invite Link.'
        });
    }

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("Invite")
        .setDescription("__**" + "Link: https://discordapp.com/oauth2/authorize?client_id=495593444513677320&scope=bot&permissions=2146958847" +"**__")
        .addField("DBL Vote Link: ", `https://discordbots.org/bot/${bot.id}`)
        .setTimestamp();


    }
}

module.exports = InviteCommand;
