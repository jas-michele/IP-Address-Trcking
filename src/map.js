let marker;


const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



fetchIP().then(data => {
    const lat = data.location.lat;
    const lng = data.location.lng;

    map.setView([lat,lng], 13);

    marker = L.marker([lat,lng]).addTo(map);

});
