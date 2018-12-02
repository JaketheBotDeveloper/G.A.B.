const commando = require('discord.js-commando');

class AvaterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avater',
            group: 'simple',
            memberName: 'avater',
            description: 'Shows your avater.'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = AvaterCommand;