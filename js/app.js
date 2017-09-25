"user strict";

//event listener for our city search button
searchButton.addEventListener('click', searchWeather);


function searchWeather() {
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none';
  //collects and validates the city input from the user
  var cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    return alert('Please enter a City Name');
  }
  
  //sends our Api request to openweathermap.org
  var http = new XMLHttpRequest();
  var apiKey = 'bfb60fbc437658c7756989da06f5b264';
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
  var method = 'GET';
  
  http.open(method, url);
  
  //parses the Api response and creates a Weather object to hold the data
  http.addEventListener("load", function () {
    var data = JSON.parse(http.responseText);
    var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
    weatherData.temperature = data.main.temp;
    updateWeather(weatherData);
  });
  
  http.send();
  
  
}


/*
uses the Weather object we constructed in searchWeather() to populate the #weather 
div with the correct weather data for the city
*/
function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;
  
  loadingText.style.display = 'none';
  weatherBox.style.display = 'block';
}