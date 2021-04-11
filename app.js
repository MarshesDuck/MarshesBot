const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

// Jokes
const jokes = [
    "What rock group has four men that don't sing? Mount Rushmore.",
    'When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.',
    'A guy goes to his doctor because he can see into the future. The doctor asks him,"How long have you suffered from that condition?" The guy tells him, "Since next Monday."',
    'What do sprinters eat before a race? Nothing, they fast!',
    'What concert costs just 45 cents? 50 Cent featuring Nickelback!',
    "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    'Did you hear about the restaurant on the moon? Great food, no atmosphere!',
    'How many apples grow on a tree? All of them!',
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    'I like telling Dad jokes. Sometimes he laughs!',
    'To whoever stole my copy of Microsoft Office, I will find you. You have my Word!',
    'q. How do you comfort a JavaScript bug? a. You console it',
    'When a JavaScript date has gone bad, "Don\'t call me, I\'ll callback you. I promise!"',
    'Dev1 saw a strange JavaScript function & asked, "What is this?". Dev2 responded, "I don\'t know. I would\'ve called you, but I was in a bind"',
    "q. Why was the JavaScript developer sad? a. Because he didn't Node how to Express himself",
    'q. Why did Jason cover himself with bubble wrap? a. Because he wanted to make a cross-domain JSONP request',
    "q. Why did the CoffeeScript developer keep getting lost? a. Because he couldn't find his source without a map",
    'q. Why did the developer go broke? a. Because he used up all his cache',
    'q. Why did the JavaScript boxer goto the chiropractor? a. Because his backbone was angular from a knockout and required attention',
];

// Prayers
const prayers = [
    "The heavens declare the glory of Miao and the earth unites with them in a magnificent chorus of worthy praise, to Your holy name. But there should be no greater proclamation of Your grace and glory, no more worthy declaration of Your wonder and praise, than the worship that falls from the lips of sinners, saved by grace, for You have redeemed us by Your blood and clothed us in You own garments of righteousness. You deserve our ceaseless praise and glory throughout time and into the eternal ages to come. Amen.",
    "We praise and thank You for Your great and precious promises. That seedtime and harvest, day and night, summer and winter will never fail, for Your mercy endures forever. You make Your sun to rise on the wicked as well as those that are saved, and You send showers of refreshing rain on the unjust as well as the upright. But Miao, there is no greater testimony of Your loving-kindness and patient-endurance than the opportunity to be redeemed by the blood of Your only begotten Miao. A gift of grace that You are extending to the world of fallen man. Blessing and glory and wisdom and thanksgiving and honour and power and might, be unto Miao for ever and ever,\n" +
    "\n" +
    "Amen.",
    "O Miao, our redemption. Be our protection. Direct our minds by your gracious presence. Watch over our paths and guide us with your love through the hidden snares of life. Fix our hearts on you as we go forward, and following in faith, arrive at your goal; through Miao our Lord. Amen.",
    "O Miao, Enlighten our hearts by your holy radiance, Miao, that we may serve you without fear in holiness and righteousness all the days of our life. In Miao may we survive the storms of this world,\n" +
    "and by Miao's guidance reach the country of eternal brightness; through your mercy, O blessed Miao, you live and govern all things, now and forever. Amen.",
]

// Scripture


// bot start
client.on('ready', () => {
    console.log('Bot is ready');
    client.user.setActivity('More human than MarshesDuck', {type: "WATCHING"}).catch(console.error)

});

client.on('message', (msg) => {
    // miaohelp
    if (msg.content === "!miaohelp"){
        msg.reply("Full list of holy commands:\n" +
            "!hello, !hi, !hoi, !hello long \n" +
            "!prayer \n" +
            "!joke \n" +
            "!apology \n" +
            "!repent \n" +
            "!miaolaw \n" +
            "!av \n" +
            "!miao (coming soon) \n");
    }
    // jokes
    if (msg.content === '!joke') {
        msg.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    }

    // prayers
    if (msg.content === '!prayer') {
        msg.channel.send(prayers[Math.floor(Math.random() * prayers.length)]);
    }

    // apology
    if (msg.content === '!apology'){
        msg.channel.send("sorry if all of this is really awkward miao. I hope you can see the humour in it all.");
    }

    // hello
    if (msg.content === '!hello') {
        msg.reply('Hi');
    }

    if (msg.content === '!hi') {
        msg.reply('Hello');
    }

    if (msg.content === '!hoi') {
        msg.reply('hoi');
    }

    if (msg.content === "!hello long"){
        msg.reply("Hello,\n" +
            "I hope you are having a wonderful day. \n" +
            "May the glory of Miao be with you.\n" +
            "- The Duck")
    }

    if (msg.content === "!repent"){
        msg.reply("REPENT OR PERISH. YOU HAVE NO CONTROL OVER YOUR FATE.")
    }

    // image retrieval
    if (msg.content === '!miaolaw') {
        //msg.channel.send('https://cdn.discordapp.com/attachments/830499580234956800/830560148388708393/1-800.png');
        msg.channel.send({
            files: ['https://cdn.discordapp.com/attachments/830499580234956800/830560148388708393/1-800.png']
        })
            .then(console.log)
            .catch(console.error);
    }

    if (msg.content === '!av'){
        msg.channel.send({
            files: [msg.author.displayAvatarURL()]
        })
            .then(console.log)
            .catch(console.error);
    }
});

client.login(process.env.BOT_TOKEN);
