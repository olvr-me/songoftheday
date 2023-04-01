export const getDates = async () => {
    const response = await fetch('http://localhost:3000/api/dates', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    return response.json();
};

export const getSong = async (songId) => {
    const response = await fetch(`http://localhost:3000/api/song?songId=${songId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        cache: 'no-cache'
    });

    return response.json();
}