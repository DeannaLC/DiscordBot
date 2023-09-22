const { Client, IntentsBitField} = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

var conch = [
    "no",
    "try asking again",
    "nothing",
    "yes"];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('messageCreate', message => {
    if (message.author === client.user) return;

    if (message.content.toLowerCase().includes('smh')) {
        message.channel.send('smh my head');
    }
    else if (message.content.toLowerCase().includes('smh my head')) {
        message.channel.send('smh my head')
    }
    else if (message.content.includes('Smh my head')) {
        message.channel.send('smh my head')
    }
    else if (message.content.toLowerCase() === 'heck') {
        message.channel.send('heck')
    }
    else if (message.content.toLowerCase() === 'info') {
        message.channel.send('This bot took way too long to make and should not exist');
    }
    else if (message.content.toLowerCase() === 'test') {
        message.channel.send('bot is here!');
    }
    else if (message.content.toLowerCase() === 'f') {
        message.channel.send('f');
    }
    else if (message.content.toLowerCase().includes('3 am')) {
        message.channel.send('OH BOY 3 AM');
    }
    else if (message.content.toLowerCase().includes('magic conch')) {
        message.channel.send(conch[Math.floor(Math.random() * conch.length)]);
    }
    else if (message.content === 'joke') {
        message.channel.send('Whats brown and sticky? A stick');
    }
    else if (message.content === 'joke 2') {
        message.channel.send('Whats red and smells like blue paint? Red paint');
    }
    else if (message.content === 'joke 3') {
        message.channel.send('How many animals can jump higher than a skyscraper? All of them, skyscrapers cant jump');
    }
    else if (message.content === 'joke 4') {
        message.channel.send('Whats green and has wheels? Grass I lied about the wheels');
    }
    else if (message.content.toLowerCase().includes('idk')) {
        message.channel.send('idk also');
    }
    else if (message.content.toLowerCase() === ('you know what else') || (message.content.toLowerCase() === ('you know what else?'))) {
        message.channel.send('nothing');
    }
    else if (message.content.includes('bot is online')) {
        message.channel.send('yeah im here');
    }
    else if (message.content.toLowerCase().includes('what time is it') || (message.content.toLowerCase().includes('what time is it?'))) {
        message.channel.send('time to get a watch ohhhhhhhhhhhh');
    }
    else if (message.content.toLowerCase() === 'what up bot') {
        message.channel.send('what up famalam');
    }
    else if (message.content.toLowerCase() === 'sup bot') {
        message.channel.send('what up famalam');
    }
    else if (message.content.toLowerCase().endsWith('wufkes')) {
        message.channel.send('hi');
    }
    else if (message.content.toLowerCase().includes('bye wufkes')) {
        message.channel.send('bye')
    }
    else if (message.content.toLowerCase().includes('hola')) {
        message.channel.send('hola')
    }
    else if (message.content.toLowerCase() === ('dice')) {
        message.channel.send('1')
    }
    else if (message.content.toLowerCase() === ('roll dice')) {
        message.channel.send('20')
    }
    else if (message.content.toLowerCase() === ('no')) {
        message.channel.send('no lmao')
    }
    else if (message.content.toLowerCase() === ('time')){
        message.channel.send('time is now' + epochTime);
    }
    else if (message.content.toLowerCase().includes('aaa')){
      message.channel.send('aaaaaa')
    }
    });

client.login('standin');