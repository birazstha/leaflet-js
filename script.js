//Map Initialization
var map = L.map("map").setView([27.685198313732105, 85.32034253942389], 21);

//OSM layer
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

var googleStreets = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});

googleStreets.addTo(map);

// Marker
var marker = L.marker([27.685198313732105, 85.32034253942389]);
var popup = marker.bindPopup("This is Ekbana").openPopup();

map.on("click", function (e) {
  console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
});

marker.addTo(map);