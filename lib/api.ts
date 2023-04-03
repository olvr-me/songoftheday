export const getAllDates = async () => {
    const response = await fetch(`/api/dates`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        cache: 'no-cache'
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
        },
        cache: 'no-cache'
    });

    return response.json();
}