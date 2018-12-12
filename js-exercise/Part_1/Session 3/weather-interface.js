$(document).ready(function() {

  //When it detects the button with the id 'weatherLocation', it will load its code logic
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({

      //This is an API link: Like where you get an online resource.
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8902851e74fc975f746a7cfae3f7697`,
      type: 'GET', //The method to get this resource
      data: {
        format: 'json' //The format of the data given by the online resource
      },
      success: function(response) {
        let celsius = (response.main.temp - 273.15).toFixed(2);
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Celsius is ${celsius}.`);
        $('.showWind').text(`The wind speed in KM/H is ${response.wind.speed}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});