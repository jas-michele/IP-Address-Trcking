// console.log("map.js loaded");
let marker;
const form = document.querySelector('form');

const customIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
});

// console.log("about to create map");
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

    const isMobile = window.innerWidth <= 768;
    const zoomLevel = isMobile ? 10 : 13;
    map.setView([lat, lng], zoomLevel);

    marker = L.marker([lat, lng], {icon: customIcon}).addTo(map);

    updateUI(data);

}

init();

window.addEventListener('resize', () => {
    map.invalidateSize();
})

async function handleSearch(e) {
    // console.log("submit working");
    e.preventDefault();

    const inputIP = document.getElementById('searchInput').value;

    const data = await fetchIP(inputIP);

    if(!data || !data.location) {
        alert("Unable to fetch IP data. Please try again.");
        return;
    }

    const lat = data.location.lat;
    const lng = data.location.lng;

    const isMobile = window.innerWidth <= 768;
     const zoomLevel = isMobile ? 10 : 13;
    map.setView([lat, lng], zoomLevel);


    if (marker) {
     marker.setLatLng([lat, lng]).setIcon(customIcon);
    }else {
        marker = L.marker([lat, lng], {icon: customIcon}).addTo(map);
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


