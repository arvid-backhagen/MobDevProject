

var map;
var stockholm = {lat: 59.3498092, lng: 18.0684758};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: stockholm,
    zoom: 15,

    //create options for map style
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'hybrid', 'satellite']
    }
  });

  //create info windows for markers
  infoWindow = new google.maps.InfoWindow({
    map: map
  });

  infowindow1 = new google.maps.InfoWindow({
    content: contentString
  });

  infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  //Handle location error
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  }
