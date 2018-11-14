function initMap() {
var map = new google.maps.Map(document.getElementById('map-container'), {
  zoom: 12,
  center: {lat: 38.551520, lng: -121.739919}
});
var marker = new google.maps.Marker({
  position: {lat: 38.535322, lng: -121.752697},
  map: map
});
}
initMap();