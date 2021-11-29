// Creating the map variable and setting zoom and coordinates to Ontario, Canada     
var map = L.map('mapid').setView([57.76773, -91.8097], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWp1dHppIiwiYSI6ImNrbGQ3d2E4MTE3cHAydXFlanJ1aG9maG4ifQ.6MOuQtvruOzh95-1C3i0jg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 19,
	id: 'mapbox/dark-v10',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiYWp1dHppIiwiYSI6ImNrbGQ3d2E4MTE3cHAydXFlanJ1aG9maG4ifQ.6MOuQtvruOzh95-1C3i0jg'
}).addTo(map);



L.control.legend({
	items: [
		{color: 'red', label: 'Lyft'},
		{color: 'blue', label: 'Uber'}
	],
	collapsed: true
}).addTo(map);



// source: https://github.com/pointhi/leaflet-color-markers
var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});




// Lyft coverage zones (as obtained from https://lyftrideestimate.com/cities)
var lyft_toronto = L.marker([43.641710, -79.383500], {icon: redIcon});
lyft_toronto.bindPopup('<p id="title"><b>Toronto</b></p> <a href="https://lyftrideestimate.com/cities/city-of-toronto-on" target="_blank">https://lyftrideestimate.com/cities/city-of-toronto-on</a>').openPopup();
lyft_toronto.addTo(map);

var lyft_ottawa = L.marker([45.407873, -75.696763], {icon: redIcon});
lyft_ottawa.bindPopup('<p id="title"><b>Ottawa</b></p> <a href="https://lyftrideestimate.com/cities/ottawa-on" target="_blank">https://lyftrideestimate.com/cities/ottawa-on</a>').openPopup();
lyft_ottawa.addTo(map);

var lyft_gta = L.marker([43.779192, -79.469466], {icon: redIcon});
lyft_gta.bindPopup('<p id="title"><b>Greater Toronto Area</b></p> <a href="https://lyftrideestimate.com/cities/greater-toronto-area-on" target="_blank">https://lyftrideestimate.com/cities/greater-toronto-area-on</a>').openPopup();
lyft_gta.addTo(map);

var lyft_vancouver = L.marker([49.278116, -123.120196], {icon: redIcon});
lyft_vancouver.bindPopup('<p id="title"><b>Vancouver</b></p> <a href="https://lyftrideestimate.com/cities/vancouver-bc" target="_blank">https://lyftrideestimate.com/cities/vancouver-bc</a>').openPopup();
lyft_vancouver.addTo(map);








// Canadian Uber coverage zones (as obtained from https://www.uber.com/global/en/cities/)

var belleville = L.marker([44.165930, -77.383805]);
belleville.bindPopup('<p id="title"><b>Belleville</b></p> <a href="https://www.uber.com/global/en/cities/belleville" target="_blank">https://www.uber.com/global/en/cities/belleville/</a>').openPopup();
belleville.addTo(map);

var calgary = L.marker([51.043952, -114.072627]);
calgary.bindPopup('<p id="title"><b>Calgary</b></p> <a href="https://www.uber.com/global/en/cities/calgary/" target="_blank">https://www.uber.com/global/en/cities/calgary/</a>').openPopup();
calgary.addTo(map);

var edmonton = L.marker([53.542954, -113.492776]);
edmonton.bindPopup('<p id="title"><b>Edmonton</b></p> <a href="https://www.uber.com/global/en/cities/edmonton/" target="_blank">https://www.uber.com/global/en/cities/edmonton/</a>').openPopup();
edmonton.addTo(map);

var fm = L.marker([56.723730, -111.377714]);
fm.bindPopup('<p id="title"><b>Fort McMurray</b></p> <a href="https://www.uber.com/global/en/cities/fort-mcmurray/" target="_blank">https://www.uber.com/global/en/cities/fort-mcmurray/</a>').openPopup();
fm.addTo(map);

var gat = L.marker([45.472522, -75.701357]);
gat.bindPopup('<p id="title"><b>Gatineau</b></p> <a href="https://www.uber.com/global/en/cities/gatineau/" target="_blank">https://www.uber.com/global/en/cities/gatineau/</a>').openPopup();
gat.addTo(map);

var halifax = L.marker([44.646360, -63.582564]);
halifax.bindPopup('<p id="title"><b>Halifax</b></p> <a href="https://www.uber.com/global/en/cities/halifax/" target="_blank">https://www.uber.com/global/en/cities/halifax/</a>').openPopup();
halifax.addTo(map);

var hamilton = L.marker([43.253261, -79.871406]);
hamilton.bindPopup('<p id="title"><b>Hamilton</b></p> <a href="https://www.uber.com/global/en/cities/hamilton/" target="_blank">https://www.uber.com/global/en/cities/hamilton/</a>').openPopup();
hamilton.addTo(map);

var kamloops = L.marker([50.676088, -120.332021]);
kamloops.bindPopup('<p id="title"><b>Kamloops</b></p> <a href="https://www.uber.com/global/en/cities/kamloops/" target="_blank">https://www.uber.com/global/en/cities/kamloops/</a>').openPopup();
kamloops.addTo(map);

var kingston = L.marker([44.230651, -76.486058]);
kingston.bindPopup('<p id="title"><b>Kingston</b></p> <a href="https://www.uber.com/global/en/cities/kingston/" target="_blank">https://www.uber.com/global/en/cities/kingston/</a>').openPopup();
kingston.addTo(map);

var kw = L.marker([43.457606, -80.511944]);
kw.bindPopup('<p id="title"><b>Kitchener-Waterloo</b></p> <a href="https://www.uber.com/global/en/cities/kitchenerwaterloo/" target="_blank">https://www.uber.com/global/en/cities/kitchenerwaterloo/</a>').openPopup();
kw.addTo(map);

var guelph = L.marker([43.546356, -80.250660]);
guelph.bindPopup('<p id="title"><b>Guelph</b></p> <a href="https://www.uber.com/global/en/cities/kitchenerwaterloo/" target="_blank">https://www.uber.com/global/en/cities/kitchenerwaterloo/</a>').openPopup();
guelph.addTo(map);

var laurentides = L.marker([46.078198, -74.448392]);
laurentides.bindPopup('<p id="title"><b>Laurentides</b></p> <a href="https://www.uber.com/global/en/cities/laurentides/" target="_blank">https://www.uber.com/global/en/cities/laurentides/</a>').openPopup();
laurentides.addTo(map);

var lethbridge = L.marker([49.692949, -112.844954]);
lethbridge.bindPopup('<p id="title"><b>Lethbridge</b></p> <a href="https://www.uber.com/global/en/cities/lethbridge/" target="_blank">https://www.uber.com/global/en/cities/lethbridge/</a>').openPopup();
lethbridge.addTo(map);

var london = L.marker([42.984279, -81.245405]);
london.bindPopup('<p id="title"><b>London</b></p> <a href="https://www.uber.com/global/en/cities/london-ont/" target="_blank">https://www.uber.com/global/en/cities/london-ont/</a>').openPopup();
london.addTo(map);

var moncton = L.marker([46.089222, -64.773253]);
moncton.bindPopup('<p id="title"><b>Moncton</b></p> <a href="https://www.uber.com/global/en/cities/moncton/" target="_blank">https://www.uber.com/global/en/cities/moncton/</a>').openPopup();
moncton.addTo(map);

var montreal = L.marker([45.498993, -73.573604]);
montreal.bindPopup('<p id="title"><b>Montreal</b></p> <a href="https://www.uber.com/global/en/cities/montreal/" target="_blank">https://www.uber.com/global/en/cities/montreal/</a>').openPopup();
montreal.addTo(map);

var nanaimo = L.marker([49.164905, -123.939624]);
nanaimo.bindPopup('<p id="title"><b>Nanaimo</b></p> <a href="https://www.uber.com/global/en/cities/nanaimo/" target="_blank">https://www.uber.com/global/en/cities/nanaimo/</a>').openPopup();
nanaimo.addTo(map);

var nr = L.marker([43.041881, -79.281842]);
nr.bindPopup('<p id="title"><b>Niagara Region</b></p> <a href="https://www.uber.com/global/en/cities/niagara-region/" target="_blank">https://www.uber.com/global/en/cities/niagara-region/</a>').openPopup();
nr.addTo(map);

var ottawa = L.marker([45.418873, -75.696763]);
ottawa.bindPopup('<p id="title"><b>Ottawa</b></p> <a href="https://www.uber.com/global/en/cities/ottawa/" target="_blank">https://www.uber.com/global/en/cities/ottawa/</a>').openPopup();
ottawa.addTo(map);

var pg = L.marker([53.916667, -122.749516]);
pg.bindPopup('<p id="title"><b>Prince George</b></p> <a href="https://www.uber.com/global/en/cities/prince-george/" target="_blank">https://www.uber.com/global/en/cities/prince-george/</a>').openPopup();
pg.addTo(map);

var quebeccity = L.marker([46.813622, -71.207939]);
quebeccity.bindPopup('<p id="title"><b>Quebec City</b></p> <a href="https://www.uber.com/global/en/cities/quebec-city/" target="_blank">https://www.uber.com/global/en/cities/quebec-city/</a>').openPopup();
quebeccity.addTo(map);

var reddeer = L.marker([52.267838, -113.812021]);
reddeer.bindPopup('<p id="title"><b>Red Deer</b></p> <a href="https://www.uber.com/global/en/cities/red-deer/" target="_blank">https://www.uber.com/global/en/cities/red-deer/</a>').openPopup();
reddeer.addTo(map);

var regina = L.marker([50.444702, -104.618882]);
regina.bindPopup('<p id="title"><b>Regina</b></p> <a href="https://www.uber.com/global/en/cities/regina/" target="_blank">https://www.uber.com/global/en/cities/regina/</a>').openPopup();
regina.addTo(map);

var quebec = L.marker([50.525995, -73.453732]);
quebec.bindPopup('<p id="title"><b>Quebec</b></p> <a href="https://www.uber.com/global/en/cities/rest-of-quebec/" target="_blank">https://www.uber.com/global/en/cities/rest-of-quebec/</a>').openPopup();
quebec.addTo(map);

var saguenay = L.marker([48.427438, -71.068582]);
saguenay.bindPopup('<p id="title"><b>Saguenay</b></p> <a href="https://www.uber.com/global/en/cities/saguenay/" target="_blank">https://www.uber.com/global/en/cities/saguenay/</a>').openPopup();
saguenay.addTo(map);

var saskatoon = L.marker([52.130074, -106.657926]);
saskatoon.bindPopup('<p id="title"><b>Saskatoon</b></p> <a href="https://www.uber.com/global/en/cities/saskatoon/" target="_blank">https://www.uber.com/global/en/cities/saskatoon/</a>').openPopup();
saskatoon.addTo(map);

var sherbrooke = L.marker([45.403852, -71.892925]);
sherbrooke.bindPopup('<p id="title"><b>Sherbrooke</b></p> <a href="https://www.uber.com/global/en/cities/sherbrooke/" target="_blank">https://www.uber.com/global/en/cities/sherbrooke/</a>').openPopup();
sherbrooke.addTo(map);

var toronto = L.marker([43.650710, -79.383500]);
toronto.bindPopup('<p id="title"><b>Toronto and surrounding cities</b></p> <a href="https://www.uber.com/global/en/cities/toronto/" target="_blank">https://www.uber.com/global/en/cities/toronto/</a>').openPopup();
toronto.addTo(map);

var tr = L.marker([46.342092, -72.542453]);
tr.bindPopup('<p id="title"><b>Trois-Rivières</b></p> <a href="https://www.uber.com/global/en/cities/troisrivieres/" target="_blank">https://www.uber.com/global/en/cities/troisrivieres/</a>').openPopup();
tr.addTo(map);

var vancouver = L.marker([49.281116, -123.120196]);
vancouver.bindPopup('<p id="title"><b>Vancouver and surrounding cities</b></p> <a href="https://www.uber.com/global/en/cities/vancouver/" target="_blank">https://www.uber.com/global/en/cities/vancouver/</a>').openPopup();
vancouver.addTo(map);

var windsor = L.marker([42.313274, -83.036566]);
windsor.bindPopup('<p id="title"><b>Windsor</b></p> <a href="https://www.uber.com/global/en/cities/windsor/" target="_blank">https://www.uber.com/global/en/cities/windsor/</a>').openPopup();
windsor.addTo(map);

var winnipeg = L.marker([49.888447, -97.137345]);
winnipeg.bindPopup('<p id="title"><b>Winnipeg</b></p> <a href="https://www.uber.com/global/en/cities/winnipeg/" target="_blank">https://www.uber.com/global/en/cities/winnipeg/</a>').openPopup();
winnipeg.addTo(map);	