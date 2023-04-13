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
        cache: 'no-cache'
    });

    return response.json();
};

export const getTrack = async (id) => {
    const { access_token } = await getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}?market=DE`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const track = await response.json();

    return {
        title: track.name,
        artists: track.artists.map(a => a.name).join(', '),
        imageUrl: track.album.images[0].url,
        link: track.uri
    }
}