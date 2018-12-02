const commando = require('discord.js-commando');
const Discord = require('discord.js');
class AvaterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avater',
            description: 'Shows your avater.'
        });
    }

    async run(message, args)
    {
      let msg = await message.channel.send("Generating avatar...");
      let target = message.mentions.users.first() || message.author;

      await message.channel.send({files: [
        {
          attachment: target.displayAvatarURL,
          name: "avatar.png"
        }
      ]});

    message.delete().catch()
    }
}

module.exports = AvaterCommand;
