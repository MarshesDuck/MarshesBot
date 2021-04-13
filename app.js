const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

/* ---------------------------------------------
    Arrays containing bot responses
 ----------------------------------------------*/

let HP = 10;
let Happiness = 10;

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
const miao = [
    "Reminders: The things of this world exists in a quantum state between matter and energy, the moment you lay your eyes on any being they will simultaneously physically collapse into one state of being.",
    "Keep comments related to reality.",
    "Political Farm\n" +
    "It's 1927 and the discovery of science uncovers decades of darkness. A brilliant wannabe, Solomon Kelly, who has always been bitter of everyday occurrences, must race against the chaos.  The world is largely consumed by Raymond, a young cartographer from the British monarchy. However, Solomon is fighting for himself,  along with his thoughts that pursued problematic prejudices. Traveling despite knowing that he might someday expose humanity,  Solomon must escape childish authorities and Alicia - the government caregiver. After seven years in a trailer, the British agreed over the 1920s,  but some answers are still in Americans.\n" +
    "A Very Human Production Directed by Mass Hysteria Written by Clueless Politicians Starring The Internet Pointless Outrage Music by Neverending Screams Edited by Hindsight 2020 Executive Producers Non Existent Screenplay by Clever Bot",
    "Earth \n" +
    "claiming to have murdered racism, a hardened member of the ocean culture committed amphibious therapy on humanity. the results bringing entire catholic business beliefs to the west. However one hundred judgmental critics led by Katherine Prima believes that introverted senators are slightly more amphibious. war with existence and the fabric of survival began, and earth quickly discovers that spending time with mental people will result in artistic assassinations. earth rests wearing a fitting cardigan,  until Illinois became jealous and quietly runs, soon fulfilled, leaving Katherine safe from literal revolutionaries.",
    "Leap day of faith",
    "A story about a guy who fell in love with a clone but the clone rejected him because he failed to tell the clone apart from other clones.",
    "I like red blankets because I cover myself up in them then the sun shines through the red fabric it make me feel like I'm back in the womb and my conscious would be soon distributed to a new body in a new dimension",
    "Death is a state that immediately follows life. Only very rarely does it not occur in that order.  During death the body's organs, like employees without an immediate supervisor, become confused and wander around the body looking for someone in charge. They meet in the buttocks where they hold a seance. They contact the dark spirit who was present at birth but learn that he has been made redundant due to cutbacks. Panicking, the organs argue amongst themselves briefly before turning out the lights and leaving, never to be heard of again. Some religions believe that when a deceased person is buried they are reincarnated as soil.",
    "Often I dream about my siblings, a brother here and a sister there. I was the only child of my parents. Years and years I've searched for my dear long lost kin, now I understand. My poor poor brothers and sisters were sealed into this wall, their bodies abosrbed by lifeless concrete yet their voices live on. The voices seeped through the cracks, whispering to me.",
    "When the human race comes to an end, I would want to lie on a grassy field. I would want stars above me as a lay there, chaos and death slowly shrouds my insignificant form. I would stroke the grass beneath me; I would feel its prehaps coarse prehaps smooth blades running through my fingers. Then I would speak to the Earth: *\"65 million years ago the dinosaurs went extinct, today we will. But that's ok, in 65 million years I'll come back, I'll come back and visit you again. Because I love you Earth, and I love the existence of life. I love it at the moment of my death, and I'll love it for the next 65 million years.\"*",
    "I walked the dimly lit halls underneath the ground, drearily dragging through the heavy air that settled beneath all the bustling human life above me. I fought against the air, the stagnation that clouded much people's sights, I was fighting against it so it will not blind my eyes. \n" +
    "Soon I felt my eyes stagnate too, as if my eye balls have melted and amalgamated into the air around me. My own eyes circled around me, mocking me, suffocating me. They were ghosts that haunted me now, I shut my eyes but my weary husk still betrays me, it always had in times like these.",
    "I knocked on the worn door of the facility, not expecting any response or humoring from those inside. They were in a world that was parallel to mine, should we ever intersect means we would simply grow apart more and more after that.\n" +
    "\"Hello? Please! I want to verify my existence! It has been years since my last verification, I believe it is long over due.\" My voice was firm, it was boasted more confidence than it ever did, and perhaps ever will be as my mind pushed back on the door's bureaucratic presence. \n" +
    "I knocked the door once more, it's peeling texture scrapped against my hand, leaving the skin raw red. I didn't care. I continued the assault on this innocent unfeeling door. Then the truth hit me like a door hinge to the tail of an unfortunate cat. \n" +
    "This was no door, this was an old wall all along.",
    "It was a hazy hallway that stretched beyond what a child's eyes could see. Or perhaps what laid beyond that haze was something so unimaginable that one's mind filtered it out from their vision. Regardless of whether it did or not, I sat at the edge of the hallway, silently staring down at the heavy metal doors that littered the parallel walls around me. I attempted to filter the doors out of my sight but to no avail. I wanted to see the walls.",
    "\"Tell me a story, Crack on the Wall!\" What a magnificent piece of geometry it is! The zigzagging lines that branches into multiple thinner lines, eventually trailing off into the dusty white chalked paint, disappearing as if they've returned to their own world. Once I stare into the wonderful line it often stares back, small pieces of white dust floated near it and some took a footing inside. The universe sat in the line, shimmering stars swirling and swishing around. And like the universe, it told me the most grandiose tales one can ever hear.",
    "There was no wall, in fact there was nothing. The scenery, despite it's simplism, still melted away. Doors and walls and windows twisted and swayed along with my footsteps, they started breathing my air. They're taking my air away. Desperately I quickened my footsteps, the little pitter patter my feet made was like a rythmic plead for acknowledgement. I zigzaged through what remained of the halls, some doors had given away, evaporated into thin air. I banged my hands against a door that was worn by the air but still kept it's shape, I wanted to scream but my eyes muffled me.",
    "That year I went to count the springs again. Though many of them laid dormant from the recent droughts I’ve never doubted for a moment that they will begin to trickle once more someday. The Yellow River will run on regardless of the humans that have settled around it, limestones will filter the aquifers despite the city built upon it, and the springs will trickle regardless of the the names we give them.",
    "It is a shame that it is so hard to reasonably debate, when it comes to those that you cannot reason with, there is no winning. There is only decibels.",
    "That's why you must not exist.",
    "Communism doesn't work for a reason, each day the leftist in me gets skinned a little more.",
    "Put me in a centrifuge, that way I'll spin and spin and my solids would be separated from my liquids and my organs and bones and  squishy bits will all be swung and swung into my legs and waist while my brain will be nothing but liquid and liquid. It is confusing.",
    "You know if you take hentai and censor all the nudity with pictures of Snickers bars it looks like people having a really heated Snickers lightsaber duel.",
    "should i go buy chicken tendies\n" +
    "is it too late\n" +
    "its too late, my sins are weighing on me, i cant breath",
    "all flesh is tempoary release yourself from your meat prisons",
    "Yes, you will be metaphysically deleted if you venture out of this channel",
    "Do not worry, for the ceasing of existence is nothing but bliss, you will be reborn into an untroubled world, unplagued by the quarrels of metaphysical existence",
]

// squish
const squish = [
    "Is kill",
    "hp-1",
    "hp-1",
    "hp-1",
    "hp-1",
    "Critical hit! Hp-2",
    "Hp-0 \n" +
    "It was not very effective...",
    "hp+1",
]

/* ---------------------------------------------
    Set Bot Status
 ----------------------------------------------*/

// bot start
client.on('ready', () => {
    console.log('Bot is ready');
    client.user.setActivity('More human than MarshesDuck', {type: "WATCHING"}).catch(console.error)

});

/* ---------------------------------------------
    Bot Commands
 ----------------------------------------------*/

// bot commands
client.on('message', (msg) => {

    // !help
    if (msg.content === "!help"){
        msg.channel.send(
            "**Greetings**: !hello, !hi, !hoi, \n" +
            "**Fun**: !joke, !av, !healme !repent \n" +
            "**Interact**: !pat, !flirt, !squish, !hp, !happiness, !feed \n"
        )
    }

    // !miaohelp
    if (msg.content === "!miaohelp") {
        msg.reply("Full list of holy commands:\n" +
            "!hello long \n" +
            "!prayer \n" +
            "!apology \n" +
            "!repent \n" +
            "!miaolaw \n" +
            "!miao \n");
    }
    // !joke
    if (msg.content === '!joke') {
        msg.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    }

    // !prayer
    if (msg.content === '!prayer') {
        msg.channel.send(prayers[Math.floor(Math.random() * prayers.length)]);
    }

    // !scripture
    if (msg.content === '!miao') {
        msg.channel.send(miao[Math.floor(Math.random() * miao.length)]);
    }

    // !apology
    if (msg.content === '!apology') {
        msg.channel.send("sorry if all of this is really awkward miao. I hope you can see the humour in it all.");
    }

    // !pat
    if (msg.content === '!pat') {
        Happiness++;
        msg.channel.send("*happiness + 1*");
    }

    // !happiness
    if (msg.content === "!happiness") {
        msg.channel.send("Happiness: " + Happiness);
    }

    // !flirt
    if (msg.content === '!flirt') {
        msg.channel.send("*flushed*");
    }

    // squish
    /*if (msg.content === '!squish') {
        msg.channel.send("*hp - 1*");
    }

     */

    // !squish
    /*
    if (msg.content === '!squish') {
        msg.channel.send(squish[Math.floor(Math.random() * squish.length)]);
    }

     */

    // !squish
    if (msg.content === "!squish") {
        let status = squish[Math.floor(Math.random() * squish.length)];
        if (status.toString() === "hp-1") {
            HP--;
        }
        if (status.toString() === "hp+1") {
            HP++;
        }
        if (status.toString() === "Critical hit! Hp-2") {
            HP -= 2;
        }
        if (status.toString() === "Is kill") {
            HP = 0;
        }
        msg.channel.send(status);

        if (HP <= 0) {
            msg.channel.send("MarshesBot fainted.");
            Happiness--;
            HP = 10;
            msg.channel.send("MarshesBot respawns!");
        }
    }

    // !feed
    if (msg.content === "!feed") {
        HP++;
        msg.channel.send("You feed the MarshesBot");
        msg.channel.send("HP + 1");
    }

    // !hp or !HP
    if (msg.content === "!hp" || msg.content === "!HP") {
        msg.channel.send(HP);
    }

    // !hello
    if (msg.content === '!hello') {
        msg.reply('Hi');
    }

    // !hi
    if (msg.content === '!hi') {
        msg.reply('Hello');
    }

    // !hoi
    if (msg.content === '!hoi') {
        msg.reply('hoi');
    }

    // !hello long
    if (msg.content === "!hello long") {
        msg.reply("Hello,\n" +
            "I hope you are having a wonderful day. \n" +
            "May the glory of Miao be with you.\n" +
            "- The Duck")
    }

    // !repent
    if (msg.content === "!repent") {
        msg.reply("REPENT OR PERISH. YOU HAVE NO CONTROL OVER YOUR FATE.")
    }


    // image retrieval

    // !miaolaw
    if (msg.content === '!miaolaw') {
        //msg.channel.send('https://cdn.discordapp.com/attachments/830499580234956800/830560148388708393/1-800.png');
        msg.channel.send({
            files: ['https://cdn.discordapp.com/attachments/830499580234956800/830560148388708393/1-800.png']
        })
            .then(console.log)
            .catch(console.error);
    }


    // !av
    if (msg.content === '!av') {
        msg.channel.send({
            files: [msg.author.displayAvatarURL()]
        })
            .then(console.log)
            .catch(console.error);
    }

    // !healme
    if (msg.content === '!healme') {
        //msg.channel.send('https://cdn.discordapp.com/attachments/830499580234956800/831005372462006362/1618025025378.jpg');
        msg.channel.send({
            files: ['https://cdn.discordapp.com/attachments/830499580234956800/831005372462006362/1618025025378.jpg']
        })
            .then(console.log)
            .catch(console.error);
    }
});

// login
client.login(process.env.BOT_TOKEN);
