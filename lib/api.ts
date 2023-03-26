export const getTrack = async (id) => {
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