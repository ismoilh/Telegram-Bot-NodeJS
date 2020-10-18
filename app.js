var TelegramBot = require("node-telegram-bot-api");

//token

var token = '1312015551:AAHhUOUoXhQgv6And__rxyNBSYrb3G5dFlA';

//polling option
var opt = {polling: true};

//create bot
var bot = new TelegramBot(token, opt);

//catch message
bot.on('message', function(msg){
    console.log(msg);
    //get sender id
    var id = msg.chat.id; 
    //get text 
    var txt = msg.text;

    //send message
    bot.sendMessage(id, txt);
});
