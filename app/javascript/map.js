var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.3498092, lng: 18.0684758},
    zoom: 15,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        mapTypeIds: ['roadmap', 'hybrid', 'satellite'],
        position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
      
}
function addInfoWindow(room, marker) {
  //add info window
  var infowindow = new google.maps.InfoWindow({
  content:  "<b>" + room.placeName + "</b>" + "<br/>" +
            "Byggnad: " + room.buildingName + "<br/>" +
            "Våning: " + room.floor + "<br/>" +
            "Sal: " + room.typeName + "<br/>" +
            "Adress: " + room.streetAddress + " " + room.streetNumber + " " + "<br/>" +
            "<img src='" + room.imageUrls[1].url + "' style='max-height: 100px; margin-top: 5px' class='img-rounded'>" 
  });

  marker.addListener('click', function() {
  infowindow.open(map, marker);
  });

}


function setMarker(room, currPos){
  var marker = new google.maps.Marker({
    position: currPos,
    map: map,
    title: room.placeName 
  });
  addInfoWindow(room, marker);
}
