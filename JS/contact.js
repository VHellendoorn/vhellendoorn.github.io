function initMap() {
var loc = {lat: 38.535321, lng: -121.7543463};
var map = new google.maps.Map(document.getElementById('map-container'), {
  zoom: 9,
  center: loc
});
var marker = new google.maps.Marker({
  position: loc,
  map: map
});
}
initMap();