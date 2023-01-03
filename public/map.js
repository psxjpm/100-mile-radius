var map = L.map('map').locate({setView: true, maxZoom: 20});
var diameter = 160934;
// create control and add to map
L.control.locate().addTo(map);

//Method to parse the post from the server and post in 'all.html' and create dom elements for the database queries
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data){
        const root = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const dateString = new Date(item.timestamp).toLocaleString();

        geo.textContent = `${item.lat}, ${item.lon}`;
        date.textContent = dateString;

        root.append(geo, date);
        document.body.append(root);
    }
    //database json contents in .db file
    console.log(data);
}

user = {lat: 52.9506567, lon: -1.1709577};
function onMapClick(e) {
  getData();
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