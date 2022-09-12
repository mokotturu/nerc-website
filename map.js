/**
 * Open Street Maps using Leaflet https://leafletjs.com/
 */

// event location
let map0 = L.map('map0').setView([42.64369, -71.30703], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map0);
L.marker([42.64369, -71.30703])
	.addTo(map0)
	.bindPopup('UMass Lowell Inn & Conference Center');

// hotels nearby
let map1 = L.map('map1').setView([42.64369, -71.30703], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map1);
L.marker([42.64369, -71.30703])
	.addTo(map1)
	.bindPopup('UMass Lowell Inn & Conference Center');
L.marker([42.61521, -71.31746]).addTo(map1).bindPopup('Sonesta Select');
L.marker([42.603662676037835, -71.34761911813817])
	.addTo(map1)
	.bindPopup('Holiday Inn Express');
L.marker([42.6419511985783, -71.24046438304549])
	.addTo(map1)
	.bindPopup('Fairfield Inn by Marriot');
