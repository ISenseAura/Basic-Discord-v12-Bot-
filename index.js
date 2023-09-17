require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const messageParser = require('./message-parser');
const client = new Discord.Client();

require("./globals");

let interval;
client.on('message', async msg => {
MessageParser.parse(msg);
});

async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  console.log(res.data)
  return res.data.memes[0].url;
}


//must be last line
client.login(Config.secret);