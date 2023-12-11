import	'./map.css';

let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
  const mylatLng = { lat: 38.6929488, lng: -4.1085622 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: mylatLng,
    mapTypeControl: false,
  });
}

window.initMap = initMap;