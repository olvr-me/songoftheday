export const getAllDates = async () => {
    const response = await fetch(`/api/dates`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    return response.json();
};

export const getSongByDate = async (date) => {
    const response = await fetch(`${process.env.BASE_URL}/api/dates?` + new URLSearchParams({
        date: date,
    }), {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    return response.json();
}

export const getPlaylistLink = async() => {
    const response = await fetch(`${process.env.BASE_URL}/api/playlist`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    return response.json();
}