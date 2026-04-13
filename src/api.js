

const API_Key = "at_cdI6lCEY5X8Vc9dmXGLoYMoMhHkjF";


//Only searches for IP address
// async function fetchIP(ip) {
// try {

//     let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_Key}`;

//     if (ip) {
//         url += `&ipAddress=${ip}`;
//     }

//     const response = await fetch(url);

//     if(!response.ok){
//         throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();

//     return data;
// }catch (error) {
//     console.error("Fetch error:", error);
//     return null;
// }

// }

function isIPAddress(value) {
    return value.split(".").length === 4;
}

async function fetchIP(value) {
    try {
        let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_Key}`;

        if (value) {
            if (isIPAddress(value)) {
                url += `&ipAddress=${value}`;
            }else {
                url += `&domain=${value}`;
            }
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}
    

