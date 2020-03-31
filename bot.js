require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

const tier = (name) => {
    const deck = name.toLowerCase();
    if (deck.includes("adp")) {
        return "Tier 1";
    }
    if (deck.includes("tyranitar")) {
        return "Absolutely busted broken";
    }
    if (deck.includes("rainbow road")) {
        return "don't skip day two";
    }
    else {
        return "Garbage deck";
    }
}

client.on('message', msg => {
    let message = msg.content;
    if (message.substring(0, 1) == '!') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];
        args = args.splice(1);

        let deck = args.join(' ')

        if (cmd === 'tier') {
            msg.reply(tier(deck))
        }
        if (cmd === 'toptenancientoriginscards') {
            msg.reply('mega tyranitar is the best card of all time')
        }
     }
});
