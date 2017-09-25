"user strict";

searchButton.addEventListener('click', searchWeather);


function searchWeather() {
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none';
  var cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    return alert('Please enter a City Name');
  }
  
  var http = new XMLHttpRequest();
  var apiKey = 'bfb60fbc437658c7756989da06f5b264';
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
  var method = 'GET';
  
  http.open(method, url);
  
  
  http.addEventListener("load", function () {
    var data = JSON.parse(http.responseText);
    var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
    weatherData.temperature = data.main.temp;
    updateWeather(weatherData);
  });
  
  http.send();
  
  
}



function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;
  
  loadingText.style.display = 'none';
  weatherBox.style.display = 'block';
}