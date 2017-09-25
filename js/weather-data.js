"user strict";

//Weather object constructor that will hold the data from our Api calls
function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._temperature = '';

}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function () {
    return this._temperature;
  },
  set: function(value) {
    this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
  }
})