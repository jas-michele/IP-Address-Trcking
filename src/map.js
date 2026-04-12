// console.log("map.js loaded");
let marker;
const form = document.querySelector('form');

console.log("about to create map");
const map = L.map('map').setView([51.505, -0.09], 13);

form.addEventListener("submit", handleSearch);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



async function init() {

    
    const data = await fetchIP();

    if (!data || !data.location) return;

    const lat = data.location.lat;
    const lng = data.location.lng;

    map.setView([lat, lng], 13);

    marker = L.marker([lat, lng]).addTo(map);

    updateUI(data);

}

init();

async function handleSearch(e) {
    // console.log("submit working");
    e.preventDefault();

    const inputIP = document.getElementById('searchInput').value;

    const data = await fetchIP(inputIP);

    const lat = data.location.lat;
    const lng = data.location.lng;

    map.setView([lat, lng], 13);


    if (marker) {
     marker.setLatLng([lat, lng]);
    }else {
        marker = L.marker([lat, lng]).addTo(map);
    }

    updateUI(data);
    form.reset();

}

function updateUI(data) {
    document.getElementById("ip").textContent = data.ip;

    document.getElementById("location").textContent =
        `${data.location.city}, ${data.location.region}, ${data.location.country}`;

    document.getElementById("timezone").textContent =
        `UTC ${data.location.timezone}`;

    document.getElementById("isp").textContent = data.isp;
}


