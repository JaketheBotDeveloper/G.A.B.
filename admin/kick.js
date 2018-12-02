const commando = require('discord.js-commando');

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
            if (!message.guild) return;
          
            if (message.content.startsWith('!kick')) {
              const user = message.mentions.users.first();
              if (user) {
                const member = message.guild.member(user);
                if (member) {
                  member.kick(args).then(() => {
                    message.reply(`👢 Successfully kicked ${user.tag} 👢`);
                  }).catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                  });
                } else {
                  message.reply('That user isn\'t in this guild!');
                }
              } else {
                message.reply('You didnt mention the user to kick!');
              }
            }
          };
    }

module.exports = KickCommand;