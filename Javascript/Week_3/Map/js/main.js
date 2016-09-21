
var myCenter=new google.maps.LatLng(40.772162,-73.977282);

function initialize()
{
var mapProp = {
  center: myCenter,
  zoom:10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter
  });

marker.setMap(map);
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  });

//add different marks..........

google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(event.latLng);
  });

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Hello! My latitude is ' + location.lat() 
  });
  infowindow.open(map,marker);
}


var infowindow = new google.maps.InfoWindow({
  content:"Hello New York!"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });

//...................
}
google.maps.event.addDomListener(window, 'load', initialize);


//Citation: 
//Source:   http://www.runoob.com/googleapi/google-maps-events.html



