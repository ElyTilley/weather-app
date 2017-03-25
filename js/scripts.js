// YOUR SCRIPTS GO HERE

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// Toggle, Show/Hide Drawer
$('.toggle-drawer').click( function() {
  
  $('aside').toggleClass('drawer');
  
});

// SPOKANE
$.simpleWeather({
    location: 'Spokane',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#spokane .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane i').addClass('icon-'+ weather.code);
      $('#spokane .high').text(weather.high);
      $('#spokane .low').text(weather.low);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });


// TOLEDO
$.simpleWeather({
    location: 'Toledo',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#toledo .temp').text(weather.temp);
      $('#toledo .city').text(weather.city);
      $('#toledo i').addClass('icon-'+ weather.code);
      $('#toledo .high').text(weather.high);
      $('#toledo .low').text(weather.low);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });


// SET LOCATION FOR LOCAL
$('#local').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// LOCAL for which Location has been set

var getWeather = function(location) {
$.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#local .temp').text(weather.temp);
      $('#local .city').text(weather.city);
      $('#local i').addClass('icon-'+ weather.code);
      $('#local .high').text(weather.high);
      $('#local .low').text(weather.low);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
};


