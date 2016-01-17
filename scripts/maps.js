define(function(){
  'use strict';

  function Map(maps_api, element) {
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

  function createMarker() {

  }

  Map.prototype = {
    constructor: Map,
    setMap: setMap,
    marker: createMarker
  };

  return Map;
});