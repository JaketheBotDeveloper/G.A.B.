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
        .setDescription("Invite Link:" + "Link: https://discordapp.com/oauth2/authorize?client_id=473231079755612160&scope=bot&permissions=2146958847")
        .addField("DBL Link: ", "https://discordbots.org/bot/473231079755612160")
        .setTimestamp();
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
    }
}

module.exports = InviteCommand;
