function initMap() {
cmuCoords = {lat: 40.442951840243765, lng: -79.94295520222039}
var map = new google.maps.Map(document.getElementById('map-container'), {
  zoom: 11,
  center: cmuCoords
});
var marker = new google.maps.Marker({
  position: cmuCoords,
  map: map
});
}
initMap();