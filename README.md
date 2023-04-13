# Songoftheday project

This application is a small website to display your handpicked 'songoftheday' on a small website, implemented in [Next.js](https://nextjs.org/).

The cover is displayed in a nice way and you can also provide a link to your own songoftheday playlist.

The final page looks like this:
![image](/documentation/ScreenshotSongoftheday.png)

[Here](https://songoftheday-seven.vercel.app/) you can find a deployed example.

## Background

This app was primarily developed to learn NextJS with the new App Router and to tinker around with some other technologies.

# Technical Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For getting the data for the song I used the [Spotify Web API](https://developer.spotify.com/documentation/web-api) (specifically the [track](https://developer.spotify.com/documentation/web-api/reference/get-track) endpoint).

For styling I used [tailwindcss](https://tailwindcss.com/). For creating the glow effect around the coverimage I used the [color-thief-react](https://www.npmjs.com/package/color-thief-react) package, which uses the original [color-thief](https://lokeshdhakar.com/projects/color-thief/) package.

## Getting Started

To run this app, you need to register an app at the spotify developer portal. This can be done [here](https://developer.spotify.com/).
After that you can retrieve your `Client ID` and your `Client Secret`, which you need in the next step. 

You need to create a new `.env` file to the root Folder of the application. This file needs three Properties:
1. `SPOTIFY_CLIENT_ID` - the Id from the registered Spotify App
2. `SPOTIFY_CLIENT_SECRET` - the Secret from the registered Spotify App
3. `BASE_URL` - the Base URL of your development environment (for example `http://localhost:3000`)

### .env
```
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
BASE_URL=...
```

Then you can start the app with the following command:

```bash
npm run dev
```

To deploy this app to vercel or another provider, you will need to add these environment variables there too.

## Adding your own data

You need to change the `data.json` file with two things: 
1. Change the propery `playlistUrl` to a link to your own playlist.
2. Add your own songs into the `dates` property. This is an array of objects, where the `date` value is just the date and the `link` is the link from the spotify track, which you can retrieve like this:

![image](/documentation/CopySongLinkSpotify.png)

The final file should look something like this: