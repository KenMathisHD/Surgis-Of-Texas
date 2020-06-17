// initMap();
const myMap = document.getElementById("map");
function initMap() {
    var surgisBandera = {lat: 29.558, lng: -98.672};
    var map = new google.maps.Map(myMap, {zoom: 14, center: surgisBandera});
    var marker = new google.maps.Marker({position: surgisBandera, map: map, url: "https://www.google.com/maps/place/SurGIS+of+Texas/@29.558685,-98.6749617,17z/data=!3m1!4b1!4m5!3m4!1s0x865c688f3e818def:0x4329c4dda1a85385!8m2!3d29.558685!4d-98.672773"});
    google.maps.event.addListener(marker, 'click', function() {
        window.open(this.url, '_blank');
    });
}


// API Key for map: AIzaSyDmQNCp5GwrajfEXCCLCCAXV88LosCnOmI