require("dotenv").config();
const RPC = require("discord-rpc");
const { getEvent, getNowPlaying } = require("./lastfm");
const client = new RPC.Client({transport: "ipc"});

if (!process.env.DISCORD_CLIENT_ID) {
    throw new Error("Missing Discord Client ID");
} else if(!process.env.LAST_FM_API_KEY) {
    throw new Error("Missing Last.fm API Key");
} else if(!process.env.LAST_FM_USERNAME) {
    throw new Error("Missing Last.fm Username")
}

const clientId = process.env.DISCORD_CLIENT_ID;
let sImageKey = process.env.SMALL_IMAGE_KEY;
const sImages = new Map([
    ["lastfm", "https://i.imgur.com/122GWJx.png"],
    ["youtube", "https://i.imgur.com/CIZRe5K.png"],
    ["apple", "https://i.imgur.com/y0BK5xs.jpg"],
    ["soundcloud", "https://i.imgur.com/bnWWcIz.png"],
    ["bandcamp", "https://i.imgur.com/t7J1yCa.png"],
    ["deezer", "https://i.imgur.com/ZenqnHA.png"],
    ["pandora","https://i.imgur.com/X8iV8q7.jpg"],
    ["tidal","https://i.imgur.com/1kQEN65.png"]
]);
for(const item of sImages[Symbol.iterator]()) {
    if (sImageKey == item[0]) {
        sImageKey = item[1];
        break
    }
}

RPC.register(clientId);
client.on("ready", ()=> {
    let prev;
    setInterval(async()=>{
        try {
            const curr = await getNowPlaying({
                username: process.env.LAST_FM_USERNAME,
                apiKey: process.env.LAST_FM_API_KEY
            });
            const {event, track} = getEvent(prev, curr);
            if(event === "nowPlaying") {
                const startTimestamp = new Date();
                await client.setActivity({
                    details: track.name,
                    state: `by ${track.artist['#text']}`,
                    startTimestamp,
                    largeImageKey: `${track.image[3]['#text']}`,
                    largeImageText: `${track.artist['#text']} - ${track.album['#text']}`,
                    smallImageKey: sImageKey,
                    smallImageText: process.env.SMALL_IMAGE_TOOLTIP,
                    instance: false,
                });
                console.log(`Now playing ${track.name} by ${track.artist['#text']}`);
            } else if(event === "stoppedPlaying") {
                await client.clearActivity();
                console.log(`Stopped playing ${track.name} by ${track.artist['#text']}`);
            }
            prev = curr;
        } catch(e) {
            console.error(e);
        }
    }, 5000);
});

client.login({ clientId }).catch(console.error);