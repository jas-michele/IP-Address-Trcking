

// const API_Key = "at_cdI6lCEY5X8Vc9dmXGLoYMoMhHkjF";

async function fetchIP(ip) {
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_Key}`;

    if (ip) {
        url += `&ipAddress=${ip}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return data;

}


    

