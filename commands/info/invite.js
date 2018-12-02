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
        .setDescription("" + "Link: https://discordapp.com/oauth2/authorize?client_id=495593444513677320&scope=bot&permissions=2146958847" +"")
        .addField("DBL Vote Link: ", "https://discordbots.org/bot/473231079755612160")
        .setTimestamp();
        let dm = message.author.id;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send("Your DMs were locked, so here is the message I am was going to send you. " + embed)
        }
    }
}

module.exports = InviteCommand;
