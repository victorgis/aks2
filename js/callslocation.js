//create custome icon
var covidrelated = L.icon({
	//iconUrl: 'https://www.pinclipart.com/picdir/big/121-1215420_glossy-home-icon-button-clip-art-at-red.png',
	iconSize: [8], //size of the icon, red color
})

var notcovidrelated = L.icon({
	//iconUrl: 'https://www.pinclipart.com/picdir/big/121-1215420_glossy-home-icon-button-clip-art-at-red.png',
	iconSize: [8], //size of the icon, green color
})

//create marker object, RED
var marker = L.marker([5.000455, 7.90733], {icon:covidrelated}).addTo(map);
var marker = L.marker([5.010193, 7.8616], {icon:covidrelated}).addTo(map);
var marker = L.marker([4.83889, 8.033812], {icon:covidrelated}).addTo(map);
var marker = L.marker([5.119136, 7.962023], {icon:covidrelated}).addTo(map);
var marker = L.marker([5.028046, 7.942625], {icon:covidrelated}).addTo(map);

//create marker object, GREEN
var marker = L.marker([5.15692, 7.959124], {icon:notcovidrelated}).addTo(map);
var marker = L.marker([5.020904, 7.890166], {icon:notcovidrelated}).addTo(map);
var marker = L.marker([5.031316, 7.916662], {icon:notcovidrelated}).addTo(map);
var marker = L.marker([4.989828, 7.890006], {icon:notcovidrelated}).addTo(map);
