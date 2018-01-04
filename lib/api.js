import key from './key.js';

export default {
  cleanData(data) {
    let dataObj = {};

    dataObj.current = {
      city: data.current_observation.display_location.full,
      currentTemp: data.current_observation.temp_f,
    }

    dataObj.hours = data.hourly_forecast.slice(0,7);

    dataObj.days = data.forecast.simpleforecast.forecastday;

    return dataObj;
  },

  getApiData() {
    return fetch(`http://api.wunderground.com/api/${key.weatherUnderGroundKey}/conditions/hourly/forecast10day/q/co/denver.json`)
    .then(data => data.json())
    .then(json => cleanData(json))
  }
}