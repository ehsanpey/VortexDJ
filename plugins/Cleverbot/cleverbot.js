exports.commands = [
    "cody"
]

var cleverbot = require("cleverbot-node");
talkbot = new cleverbot;
cleverbot.prepare(function() {});

exports.cody = {
    usage: "<message>",
    description: "Talk directly to the bot",
    process: function(bot, msg, suffix) {
        var conv = suffix.split(" ");
        talkbot.write(conv, function(response) {
            msg.channel.sendMessage("", {
                embed: {
                    color: 0x8698FE,
                    author: {
                        name: "Cody's ChatBot",
                        icon_url: "http://imgur.com/a/f4RNt"
                    },
		    timestamp: new Date(),
                    description: response.message,
                }
            }).catch(console.error);
            msg.react('👌');
        })
    }
}
