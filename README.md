# Songoftheday project

This application is a small website to display your handpicked 'songoftheday' on a small website, implemented in [Next.js](https://nextjs.org/).

The cover is displayed in a nice way and you can also provide a link to your own songoftheday playlist.

The final page looks like this:
![image](/documentation/ScreenshotSongoftheday.png)

[Here](https://songoftheday-seven.vercel.app/) you can find a deployed example.

## Background

This app is primarily a small project for me to learn NextJS and tinker around with some new technologies. 

# Technical Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To use this app correctly, you need to register your instance of the app to spotify, to use the developer portal. This can be done [here](https://developer.spotify.com/).
There you can register your app and retrieve the `Client ID` and the `Client Secret` which you need in the next step. 

For this app to work correctly, you need to add a new `.env` file to the root Folder of the application. This file needs these three Properties:
1. `SPOTIFY_CLIENT_ID` - the Id from the registered Spotify App
2. `SPOTIFY_CLIENT_SECRET` - the Secret from the registered Spotify App
3. `BASE_URL` - the Base URL of your development environment (for example `http://localhost:3000`)

Then you can start the app with the following command:

```bash
npm run dev
```

To deploy this app to vercel or another provider, you will need to add these environment variables there too.

## Adding your own data

First, you can link to your own playlist with changing the `playlistUrl` variable in the Header Component.

Also, you need to change the `data.json` file with your own songs.
The `date` value is just the date and the `link` is the link from the spotify track, which you can retrieve here:
![image](/documentation/CopySongLinkSpotify.png)