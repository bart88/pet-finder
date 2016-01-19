define(function(){
  'use strict';

  function Map(maps_api, element) {
    this.google = maps_api;
    this.map = new maps_api.Map(element, {
      zoom: 15
    });
    this.infoWindow = new maps_api.InfoWindow({map: this.map});
  }

  function setMap() {
    var self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        self.infoWindow.setPosition(pos);
        self.infoWindow.setContent('Location found.');
        self.map.setCenter(pos);
      });
    }
  }

  function createMarker(address, infoMessage) {

      var google = this.google;
      var map = this.map;

      var i = new google.InfoWindow({
        content: infoMessage.message
      });

      var marker = new google.Marker({
        position: address,
        map: this.map,
        title: infoMessage.title
      });

      google.event.addListener(marker, 'click', function(){
        i.open(map,marker);
      });
  }

  Map.prototype = {
    constructor: Map,
    setMap: setMap,
    marker: createMarker
  };

  return Map;
});
