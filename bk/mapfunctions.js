
/**
 *
 * @param geocoder
 * @param address
 * @param callback
 */
function geocodeAddress(geocoder, address, callback) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

        var obj = {
          'address' : address,
          'position': results[0].geometry.location
        };

        callback(obj);

      } else {
        alert("No results found");
      }
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });

}

/**
 * Creates a google map marker and info window for the marker.
 *
 * @param map
 * @param address
 * @param message
 */
function createMarker(map, address, message) {

  var infowindow = new google.maps.InfoWindow({
    content: message
  });

  var marker = new google.maps.Marker({
    position: address.position,
    map: map,
    title: address.address
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

}

/**
 *
 * @param reference string
 * @returns {string}
 */
function createImage(reference) {
  return '<img src="'+reference+'"/>';
}

/**
 *
 * @param item
 * @param text
 * @param image
 * @returns {string}
 */
function createMessage(item, text, image) {
  //@todo - add image if any
  //@todo - better formatting
  return '<h3>'+ item.action + ' ' + item.type +'</h3><p>'+ item.date +'</p><p><img src="'+image+'"></p><p>' + text +'</p>';

}
