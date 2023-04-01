export const getDates = async () => {

    console.log('making api-call to getDates');

    const response = await fetch('http://localhost:3000/api/dates', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    return response.json();
};