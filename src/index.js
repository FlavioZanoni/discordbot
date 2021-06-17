require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    // bot rich presence
    client.user.setPresence({
        status: 'online',
        activity: {
            name: "oie",
            type: "LISTENING",
        }
    });
})


client.on("message", msg => {
    console.log("message received")
    if (msg.content === "ping?") {
        msg.channel.send(`pong`)
    }
})


client.login(process.env.TOKEN)
