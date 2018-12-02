const commando = require('discord.js-commando');
const Discord = require('discord.js')
class HelpCommand extends commando.Command

{
    constructor(client)
    {
        super(client,{
            name: 'help',
            group: 'info',
            memberName: 'help',
            description: 'Says the commands'
        });
    }

    async run(message, args)
    {
        let dmembed = message.author.id;
        let embed = new Discord.RichEmbed()
        .setTitle("Help Menu")
        .setDescription("**" + "__" + "Bot made by Jake18122003#5483 + eazoppe" + "__" + "**")
        .addField("Music Commands","**<prefix>join** to get the bot to join your voice channel, **<prefix>leave** to make the bot to leave your voice channel, **<prefix>play to play a url video")
        .addField("Moderator Commands", "**<prefix>kick** to kick a user, **<prefix>ban>** to ban a user.")
        .addField("Fun Commands", "**<prefix>**avatar shows a users Avatar, <prefix>roll to role a 6 sided dice")
        .addField("Infomation commands", "**<prefix>help** to tell you about the commands" )
        .addField("Bugs?", "Please DM Jake18122003#5483 or eazoppe#9471")
        .setTimestamp()
        .setFooter("Help menu made by Jake18122003#5483", `Please report all bugs ${message.author.username}`);
        try {
        dm.send(dmembed);
      } catch(e) {
        let channelembed = new Discord.RichEmbed()
        .setTitle("Help Menu")
        .setDescription("**" + "__" + "Bot made by Jake18122003#5483 + eazoppe" + "__" + "**")
        .addField("Music Commands","**<prefix>join** to get the bot to join your voice channel, **<prefix>leave** to make the bot to leave your voice channel, **<prefix>play to play a url video")
        .addField("Moderator Commands", "**<prefix>kick** to kick a user, **<prefix>ban>** to ban a user.")
        .addField("Fun Commands", "**<prefix>**avatar shows a users Avatar, <prefix>roll to role a 6 sided dice")
        .addField("Infomation commands", "**<prefix>help** to tell you about the commands" )
        .addField("Bugs?", "Please DM Jake18122003#5483 or eazoppe#9471")
        .setTimestamp()
        .setFooter("Help menu made by Jake18122003#5483", `Note: You're DMs was closed ${message.author.username}`);
      }
    }
}

module.exports = HelpCommand;
