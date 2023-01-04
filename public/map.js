var map = L.map('map').locate({setView: true, maxZoom: 20});
var diameter = 160934;
// create control and add to map
L.control.locate().addTo(map);

//TODO: Change location - find a way not to hardcode it
user = {lat: 52.9506567, lon: -1.1709577};

function onMapClick(e) {
  var locs = {lon: e.latlng.lng, lat: e.latlng.lat};
  var n = arePointsNear(user, locs, diameter);
  console.log(locs);
  console.log(n);
  L.marker(e.latlng)
  .addTo(map);

  if (n){
    L.marker(e.latlng)
    .addTo(map);
  }
  
  else{
    L.marker(e.latlng)
    .addTo(map);
  }

}
map.on('click', onMapClick);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

//TODO: delete this after demo and debugs
var circle = L.circle([52.94951704158299, -1.1707091331481936],{
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.1,
  radius: 160934 //100 miles in meters
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

function arePointsNear(checkPoint, centerPoint, m) { // credits to user:69083
  var km = m/1000;
  var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
  var dx = Math.abs(centerPoint.lon - checkPoint.lon) * kx;
  var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= km;
}