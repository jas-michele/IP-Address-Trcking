let marker;
const form = document.querySelector('form');
const map = L.map('map').setView([51.505, -0.09], 13);

form.addEventListener("submit", handleSearch);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



async function init() {
    const data = await fetchIP();

    const lat = data.location.lat;
    const lng = data.location.lng;

    map.setView([lat, lng], 13);

    marker = L.marker([lat, lng]).addTo(map);
}

init();

async function handleSearch(e) {
    // console.log("submit working");
    e.preventDefault();

    const inputIP = document.getElementById('searchInput').value;
    console.log("input value", inputIP);
    const data = await fetchIP(inputIP);

    const lat = data.location.lat;
    const lng = data.location.lng;

    map.setView([lat, lng], 13);

    marker.setLatLng([lat, lng]);

    form.reset();

}


