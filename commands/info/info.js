const commando = require('discord.js-commando');
const Discord = require('discord.js');
class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'info',
            memberName: 'info',
            description: 'Says some things about the bot.'
        });
    }

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("Info about Sith Bot")
        .setDescription("I am G.A.B.. G.A.B. stands for Gaming Administration Bot. I am always being worked on to be improved and get me better. If you want to invite me you can do !invite to invite me. I can kick people and ban people.")
        .addField("I am made by eazoppe#9471 and Jake18122003#5483. If you need any help or need to report a bug you can join the G.A.B. Support Server. Here is the link: https://discord.gg/CaX7gX8")
        .setThumbnail('https://cdn.discordapp.com/attachments/518557138281562135/525843370636083220/GAB.png')
        .setColor(0xf38b03);
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
    }
}

module.exports = InfoCommand;

