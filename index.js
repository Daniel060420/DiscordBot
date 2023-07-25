const Discord = require('discord.js')
const { Client, intents } = require('discord.js')
const CONFIG = require('./config.json')
const client = new Discord.Client({
    intents: ['Guilds', 'MessageContent', 'GuildMessages']
});

client.on('ready', () => {
    console.log('el bot se ha conectado')
})

client.login(CONFIG.token)

