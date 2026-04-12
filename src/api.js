

const API_Key = "at_cdI6lCEY5X8Vc9dmXGLoYMoMhHkjF";

async function fetchIP(ip) {
try {

    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_Key}`;

    if (ip) {
        // url += `&ipAddress=${ip}`;
    }

    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();

    return data;
}catch (error) {
    console.error("Fetch error:", error);
    return null;
}

}


    

