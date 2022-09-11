const Discord = require("discord.js");
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const token = require("./config/token.json");

client.once('ready', () => { 
  console.log(`Hello~ ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  msg.reply("드디어 성공!");
});

client.login(token.token);