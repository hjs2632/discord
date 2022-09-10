// const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});
const token = require("./config/token.json");

client.once('ready', () => { 
  console.log(`Hello~ ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
  }
});

client.login(token.token);