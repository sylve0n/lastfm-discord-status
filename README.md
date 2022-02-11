# Discord Last.fm Script

Script that sets your Discord status with information about what song you're currently scrobbling. Forked from [Draxerra/lastfm-discord-status](https://github.com/Draxerra/lastfm-discord-status) and expanded upon a little.

This is what it looks like:  
![](https://i.imgur.com/iABW6fq.png)   
![](https://i.imgur.com/iLkfBj4.png)

## First Steps

1. Create a Discord application [here](https://discordapp.com/developers/applications/). The name of the application is what your status will display as. Grab the Client ID from the OAuth2 section of your app dashboard.

2. Get an API account on Last.fm [here](https://www.last.fm/api/account/create) and grab the API key from it.

## Running the Script

You will need a .env file in the root directory. Copy example.env and rename it, then set the following environment variables:

| Variable          |                         Value |
|:------------------|--------------------------------------:|
| DISCORD_CLIENT_ID | Discord Application Client ID |
| LAST_FM_API_KEY   | Last.fm API Key               |
| LAST_FM_USERNAME  | Your Last.fm username         |
| SMALL_IMAGE_KEY (Optional)   | `lastfm | youtube | apple | bandcamp| soundcloud | deezer | custom url`  <br/> You can choose from the premade keys or add your own image url.
| SMALL_IMAGE_TOOLTIP (Optional)| Sets the tooltip text for the small image icon.|

### Built-in image icons
<details><summary>Expand to view (some of them are big)</summary>
| Tag          |                                Image |
|:-------------|-------------------------------------:|
| lastfm       | ![](https://i.imgur.com/122GWJx.png) |
| youtube      | ![](https://i.imgur.com/CIZRe5K.png) |
| apple        | ![](https://i.imgur.com/y0BK5xs.jpg) |
| bandcamp     | ![](https://i.imgur.com/t7J1yCa.png) |
| soundcloud   | ![](https://i.imgur.com/bnWWcIz.png) |
| pandora      | ![](https://i.imgur.com/X8iV8q7.jpg) |
| deezer       | ![](https://i.imgur.com/ZenqnHA.png) |
</details>

Run `npm start` and Discord will display your custom rich presence status with whatever you're currently Scrobbling!
