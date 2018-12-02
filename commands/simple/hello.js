const commando = require('discord.js-commando');

class HelloCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hello',
            group: 'simple',
            memberName: 'hello',
            description: 'Says hello'
        });
    }

    async run(message, args)
    {
        message.reply("Hello, I am G.A.B.. G.A.B. stands for Entertainment Administration Bot. I am made by eazoppe#9471 and Jake18122003#5483.");
    }
}

module.exports = HelloCommand;