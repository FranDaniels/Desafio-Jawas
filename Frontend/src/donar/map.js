let map;
let marker;
let geoloc;
let responseDiv;
let response;
let autocomplete;
var inputUbicacion = document.getElementById("ubicacion");

function initMap() {
  const mylatLng = { lat: 38.69296294925023, lng: -4.1086506843566895 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: mylatLng,
    mapTypeControl: false,
  });
  marker = new google.maps.Marker({
    position: mylatLng,
    map: map,
  });
  
  initAutocomplete();
}

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(inputUbicacion);
  autocomplete.addListener("place_changed", function () {

    const place = autocomplete.getPlace();

    map.setCenter(place.geometry.location)
    marker.setPosition(place.geometry.location)

    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
    
    localStorage.setItem("latitud",lat)
    localStorage.setItem("longitud",lng)

    console.log(localStorage.getItem("latitud"))
    console.log(localStorage.getItem("longitud"))
  });
}

initMap();