function loadGoogleMap() {
  var mapCanvas = document.getElementById('map-canvas');
  var position = new google.maps.LatLng(45.24323, 19.848189);
  var mapOptions = {
    center: position,
    controls: true,
    scrollwheel: false,
    draggable: true,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({ placeId: 'ChIJyQxk8Q0QW0cRCi1Zh7bt3F0' }, function(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() { openMarker(infowindow, map, place, this); });
      openMarker(infowindow, map, place, marker);
    }
  });
} // loadGoogleMap

function openMarker(infowindow, map, place, marker) {
  infowindow.setContent('<strong>'+place.name+'</strong><br>'+
    decodeURIComponent('%3c%61%20%68%72%65%66%3d%22%6d%61%69%6c%74%6f%3a%68%65%6c%6c%6f%40%6f%72%61%6e%67%65%69%63%65%62%65%72%67%2e%63%6f%6d%22%3e%68%65%6c%6c%6f%40%6f%72%61%6e%67%65%69%63%65%62%65%72%67%2e%63%6f%6d%3c%2f%61%3e')+
    '<br>'+
    place.adr_address+'<br>'+
    place.international_phone_number+'<br>'+
    '<a href="'+place.website+'">'+place.website+'</a>'
  );
  infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', loadGoogleMap);
