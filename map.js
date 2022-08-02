/**
 * Open Street Maps using Leaflet https://leafletjs.com/
 */

let map = L.map('map').setView([42.64369, -71.30703], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.marker([42.64369, -71.30703]).addTo(map).bindPopup('UMass Lowell Inn & Conference Center').openPopup();
