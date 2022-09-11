// const Discord = require("discord.js");
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const token = require("./config/token.json");

client.once('ready', () => { 
  console.log(`Hello~ ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    msg.reply({embeds: [new EmbedBuilder().setTitle("무엇을 원하느냐")] });
});

client.login(token.token);