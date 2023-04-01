export const getAllDates = async () => {
    const response = await fetch('http://localhost:3000/api/dates', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    return response.json();
};

export const getSongByDate = async (date) => {
    const allDates = await getAllDates();

    let foundSongId;
    allDates.dates.forEach(d => {

        console.log(`date: ${d.date} searchDate: ${date} are equal: ${d.date === date}`)

        if (d.date === date) {
            foundSongId = d.songId;
        }
    });

    if (foundSongId === undefined) {
        return null;
    }

    return await getSong(foundSongId);
}

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