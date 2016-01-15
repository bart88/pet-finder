define(function(){
  'use strict';

  /**
   * Gecoder constructor.
   *
   * @param maps_api Google Maps api.
   * @constructor
   */
  function Geocoder(maps_api) {
    this.geocoder = maps_api.Geocoder();
    this.status_ok = maps_api.maps.GeocoderStatus.OK;
    this.zero_results = maps_api.maps.GeocoderStatus.ZERO_RESULTS;
  }

  /**
   * Geocode a string address into an address and position object.
   *
   * @param address
   * @param callback Optional callback
   *
   * @returns mixed. If optional callback is provided it will trigger
   * the callback function with the object. Otherwise it just returns the object.
   */
  function geocodeAddress(address, callback) {

    var geocoder = this.geocoder;
    var ok = this.status_ok;
    var zero_results = this.zero_results;

    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == ok) {
        if (status != zero_results) {

          var object = {
            'address' : address,
            'position': results[0].geometry.location
          };

          // If there is a callback trigger.
          if(callback && typeof callback === 'function') {
            return callback(object);
          }

          return object;
        } else {
          console.error('No results found for parsed address :' + address);
          console.error(status);
        }
      } else {

        console.error('Geocode address was not successful for the following reasion : ' + status);
      }
    });

  }

  Geocoder.prototype = {};
  Geocoder.prototype.constructor = Geocoder;
  Geocoder.prototype.address = geocodeAddress;

  return Geocoder;
});