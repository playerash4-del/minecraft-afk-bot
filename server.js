const express = require('express');
const mineflayer = require('mineflayer');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot is up and running!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Web server is live.');
});
const botOptions = {
  host: 'GreekS2Smp.aternos.me', 
  port: 47615,                      
  username: 'GreeksmpS2',              
  version: '1.21.1',
  auth: 'offline'
};

let bot;

function createBot() {
  bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('Bot successfully joined the server!');
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting in 10 seconds...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Error encountered: ', err);
  });
}

createBot();
