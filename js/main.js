function initMap() {
  let myLocation = {lat: 50.465019, lng: 30.514980};

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLocation
  });

  let marker = new google.maps.Marker({
    position:myLocation,
    map: map,
    title: 'PT'
  });
}


let navLinks  = document.querySelectorAll('.nav__link');
