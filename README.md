# Discord Last.fm Script

Script that sets your Discord status with information about what song you're currently scrobbling. Forked from [Draxerra/lastfm-discord-status](https://github.com/Draxerra/lastfm-discord-status) and expanded upon a little.

This is what it looks like:  
![](https://i.imgur.com/iABW6fq.png)   
![](https://i.imgur.com/iLkfBj4.png)

## First Steps

1. Create a Discord application [here](https://discordapp.com/developers/applications/). The name of the application is what your status will display as (I named mine "Not Spotify"). Grab the Client ID from the OAuth2 section of your app dashboard.

2. Get an API account on Last.fm [here](https://www.last.fm/api/account/create) and grab the API key from it.

### For my non-developer friends

You will need [node.js](https://nodejs.org/en/) downloaded and installed.      
1. [Download the repo](https://github.com/sylve0n/lastfm-discord-status/archive/refs/heads/master.zip) then unzip it.
2. Open the folder with [command prompt in Windows](https://www.wikihow.com/Open-a-Folder-in-Cmd), or Terminal in OSX (you can drag the folder to the terminal icon in your Dock to open it).
3. Run the command `npm install` and wait for it to finish installing the packages. Don't close the command prompt/terminal.
4. Go back to the folder, find the file named `example.env`, and open it in a text editor. Change the variables to match the instructions below and save it. Rename that file to `.env` (no file name, we only want the file type). It might warn you when you do this because files that start with a period are treated as hidden files. If it disappears, you can [change your view options in Windows](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5) or hit `Command + Shift + . (period)` inside of your Finder folder in OSX.
5. After you have your `.env` file saved, go back into command prompt/terminal and run the command `npm start`. This should start up and after a few seconds print the current track information to the console. If it does not, check that you have the correct variables (correct Discord app ID/Last.fm API Key/Last.fm Username) and if you're actually scrobbling at the current time.
6. If everything is working, you should see your status look like the ones in the example!
7. **Don't close the console unless you want it to stop updating.** If you close it, the script is no longer running so it won't update your status. If you stop scrobbling, I recommend closing the script (or you can hit `ctrl + C` and keep the window open) so it isn't wasting resources checking your Last.fm account when you're not listening to anything.

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


 Tag             |                                                                                                 Image |
|:----------------|-----------------------------------------------------------------------------------------------------:|
| lastfm      | ![](https://i.imgur.com/122GWJx.png)                          |
| youtube      | ![](https://i.imgur.com/CIZRe5K.png)                                             |
| apple    | ![](https://i.imgur.com/y0BK5xs.jpeg)                    |
| bandcamp       | ![](https://i.imgur.com/t7J1yCa.png) |
| soundcloud          | ![](https://i.imgur.com/bnWWcIz.png)                          |
| pandora      | ![](https://i.imgur.com/X8iV8q7.jpeg)             |
| deezer  | ![](https://i.imgur.com/ZenqnHA.png)           |
| tidal | ![](https://i.imgur.com/1kQEN65.png)           |


</details>

Run `npm start` and Discord will display your custom rich presence status with whatever you're currently Scrobbling!
