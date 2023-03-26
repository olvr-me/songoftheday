const getToken = async () => {

    const SpotifyWebApi = require('spotify-web-api-node');

    var spotifyApi = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    });

    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);

            spotifyApi.getTrack('4AGwu2Zn3sYmR2s2y3vfft').then(
                function (data) {
                    console.log('Artist albums', data.body);
                },
                function (err) {
                    console.error(err);
                }
            );
        },
        function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        }
    );
}

export const getTrack = async (id) => {

    await getToken();

    const res = await fetch('http://localhost:3000/api/song', {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    const result = await res.json();

    return result.data;
}