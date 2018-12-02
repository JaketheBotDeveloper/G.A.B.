const commando = require('discord.js-commando');

class SayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'say',
            group: 'simple',
            memberName: 'say',
            description: 'Says what you told me to say.'
        });
    }

    async run(message, args)
    {
        message.say(args);
    }
}

module.exports = SayCommand;