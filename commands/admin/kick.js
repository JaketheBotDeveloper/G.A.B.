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
    hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return msg.member.hasPermission('KICK_MEMBERS') || this.client.isOwner(msg.author);
    };

    async run(message, args)
    {
        client.on('message', message => {
            if (!message.guild) return;
          
            if (message.content.startsWith('!kick')) {
              const user = message.mentions.users.first();
              if (user) {
                const member = message.guild.member(user);
                if (member) {
                  member.kick('Optional reason that will display in the audit logs').then(() => {
                    let embed = new Discord.RichEmbed()
                    .setTitle("Kicked")
                    .setDescription(`Successfully kicked ${user.tag}`)
                    .setColor(0xad9434);
                    try {
                        dm.sent(embed);
                    }catch(e) {
                        message.channel.send(embed)
                    }
                  }).catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                  });
                } else {
                  message.reply('That user isn\'t in this guild!');
                }
              } else {
                message.reply('You didn\'t mention the user to kick!');
              }
            }
          });
    }
};
module.exports = KickCommand;
