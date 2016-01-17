require.config({
  baseUrl: "scripts",
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    async : "libs/requirejs-plugins/async",
    depend: "libs/requirejs-plugins/depend",
    font: "libs/requirejs-plugins/font",
    goog: "libs/requirejs-plugins/goog",
    image: "libs/requirejs-plugins/image",
    json: "libs/requirejs-plugins/json",
    markdown_converter: "libs/requirejs-plugins/markdown.converter",
    mdown: "libs/requirejs-plugins/mdown",
    noext: "libs/requirejs-plugins/noext",
    property:  "libs/requirejs-plugins/propertyParser",
    text: "libs/requirejs-plugins/text",
    jquery : "libs/jquery/jquery",
    facebook : "//connect.facebook.net/en_US/all",
    googlemaps: "libs/googlemaps"
  },
  googlemaps: {
    params: {
      key: 'AIzaSyDPmxNOhyPW4DR2tdfxMq-bpreHLr_bnxA'
    }
  }
});




// parser done
require(['googlemaps!', 'libs/fb', 'jquery', 'base_parser', 'geocoder', 'feed', 'template', 'maps'],
  function(google, fb, $, base_parser, geocoder, feed, template, gmap) {

  var regex = /(\w+\b)(?:\s)(bird|cat|dog(?=s\b|\b))(?:\s|s+)(.*)(?:\#\w+\b\s)([0-9\/]+\b)/gi;
  var groups = ['action', 'type', 'location', 'date'];
  var parser = new base_parser(regex, groups);
  var gmapsGeocoder = new geocoder(google);
  var imageTemplate = new template('img');
  // create a map
  var map = new gmap(google, document.getElementById('map'));
  map.setMap();


  feed.done(function(stories) {
    // parse all the data !
    // filter out all stories with no message property
    var messages = stories.data.filter(function(object) {
      if (object.message) return object;
    });

    // go to work parsing each on
    var parsed_objects = messages.map(function(object) {
      var msg = parser.parse(object.message);
      // must be parseable.
      if(msg.action && msg.location) {

        var return_object = {};
        // create a picture
        var picutre = (object.picture) ? imageTemplate.attach({
          'name'  : 'src',
          'value' : object.picture
        }) : '';

        // get a geocoded position from a text address.
        var geoLocation = gmapsGeocoder.address(msg.location.trim(' '), function(pos) {
          return_object.geolocation = pos;
        });

        return_object = {
            'message'     : object.message,
            'action'      : msg.action,
            'type'        : msg.type,
            'location'    : msg.location.trim(' '), // trim off excess whitespace
            'date'        : msg.date,
            'picture'     : picutre
        };
        return return_object;
      }

    });

    // with parsed objects lets place them on a map
    parsed_objects.map(function(obj){

    });

  });

});