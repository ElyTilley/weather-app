// YOUR SCRIPTS GO HERE

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})

$.simpleWeather({
    location: 'Miami',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      
      // Display Current
      $('.city').text(weather.city);
      $('.temp').text(weather.temp)
      
      // Display Future Weather
      // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
      
      console.log(weather.forecast[0].high);
    
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-|');
    }
  
  });