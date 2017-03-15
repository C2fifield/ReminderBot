var DiscordClient = require('discord.io');
var bot = new DiscordClient.Client({
    autorun: true,
    email: "", // email
    password: "", // password
    //OR
    token: "MjkwNjU5NDAwOTE2NjY0MzIx.C6eKfg.zHWCzpQWb6G0YM4NCwQrii9Ptm8"
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!setGBReminders") { // command to trigger
    	var date = new Date();
    	var year = date.getFullYear();
    	var day = date.getDate();
    	var hour = date.getHours();
    	var min = date.getMinutes();
    	var sec = date.getSeconds();
    	var eta_ms = new Date(year,day,10,55,0) - Date.now();
    	var timeout = setTimeout(function(){
      		var interval = setInterval (function (){
		        bot.sendMessage({
		          to: channelID,
		          message: "GB!" // message to send
		        });
      		}, 86400000); // time between each interval in milliseconds
      	},eta_ms);

      	var eta_ms = new Date(year,day,15,55,0) - Date.now();
    	var timeout = setTimeout(function(){
      		var interval = setInterval (function (){
		        bot.sendMessage({
		          to: channelID,
		          message: "GB!" // message to send
		        });
      		}, 86400000); // time between each interval in milliseconds
      	},eta_ms);

      	var eta_ms = new Date(year,day,18,55,0) - Date.now();
    	var timeout = setTimeout(function(){
      		var interval = setInterval (function (){
		        bot.sendMessage({
		          to: channelID,
		          message: "GB!" // message to send
		        });
      		}, 86400000); // time between each interval in milliseconds
      	},eta_ms);

      	bot.sendMessage({
		          to: channelID,
		          message: "GB Reminders set!" // message to send
		        });
    }
    // New command starts here
    else if (message === "!help") {
      bot.sendMessage({
        to: channelID,
        message: "Insert Message here"
      });
    }
    // Ends here
});