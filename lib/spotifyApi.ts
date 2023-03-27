const getAccessToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "client_credentials"
        }),
    });

    return response.json();
};

export const getTrack = async (id) => {
    const { access_token } = await getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const track = await response.json();

    console.log(track.album.images);

    return {
        title: track.name,
        artist: track.artists[0].name,
        imageUrl: track.album.images[0].url
    }
}