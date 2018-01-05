import key from './key.js';

export default {
  // cleanData(data) {
  //   let dataObj = {
  //     location: 'data.display_location.full' ,
  //     city: { data.current_observation.display_location.full },
  //     weather: { data.forecast.simpleforecast.forecastday[0].conditions },
  //     weekday: { data.forecast.simpleforecast.forecastday[0].date.weekday },
  //     month: { data.forecast.simpleforecast.forecastday[0].date.monthname },
  //     day: { data.forecast.simpleforecast.forecastday[0].date.day },
  //     current: { data.current_observation.temp_f },
  //     high: { data.forecast.simpleforecast.forecastday[0].high.fahrenheit },
  //     low: { data.forecast.simpleforecast.forecastday[0].low.fahrenheit },
  //     icon: { icons },
  //     weatherCondition: { data.forecast.simpleforecast.forecastday[0].icon },
  //     summary: { data.forecast.txt_forecast.forecastday[0].fcttext },
  //     forcast: { data.hourly_forecast.slice(0, 7) },
  //     days: { data.forecast.simpleforecast.forecastday }
  //   };
  //   return dataObj;
  // },

  getApiData() {
    return fetch(`http://api.wunderground.com/api/${key.weatherUnderGroundKey}/conditions/hourly/forecast10day/q/co/denver.json`)
    .then(data => data.json())
    // .then(json => cleanData(json))
  }
}