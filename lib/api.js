import key from './key.js';

export default {
  cleanData(data) {
    let hourlyArr = data.hourly_forecast.slice(0, 7);
    let dayArr = data.forecast.simpleforecast.forecastday;

    // let cleanHourlyArr = hourlyArr.map((hour) => {
    //   return {
    //     hour: ,
    //     weather: ,
    //     temp: ,
    //     weatherCondition: ,
    //     icon:
    //   }
    // })

    let cleanDayArr = dayArr.map((day) => {
      return {
        weekday: day.date.weekday,
        month: day.date.monthname,
        day: day.date.day,
        weather: day.conditions.toUpperCase(),
        high: day.high.fahrenheit,
        weatherCondition: day.icon, 
      }
    })

    let cleanObj = {
      current: {
        city: data.current_observation.display_location.full,
        current: data.current_observation.temp_f,
      },
      days: cleanDayArr,
      hours: hourlyArr,
    }

    return cleanObj;

    // let dataObj = {
    //   location: 'data.display_location.full' ,
    //   city: { data.current_observation.display_location.full },
    //   weather: { data.forecast.simpleforecast.forecastday[0].conditions },
    //   weekday: { data.forecast.simpleforecast.forecastday[0].date.weekday },
    //   month: { data.forecast.simpleforecast.forecastday[0].date.monthname },
    //   day: { data.forecast.simpleforecast.forecastday[0].date.day },
    //   current: { data.current_observation.temp_f },
    //   high: { data.forecast.simpleforecast.forecastday[0].high.fahrenheit },
    //   low: { data.forecast.simpleforecast.forecastday[0].low.fahrenheit },
    //   icon: { icons },
    //   weatherCondition: { data.forecast.simpleforecast.forecastday[0].icon },
    //   summary: { data.forecast.txt_forecast.forecastday[0].fcttext },
    //   forcast: { data.hourly_forecast.slice(0, 7) },
    //   days: { data.forecast.simpleforecast.forecastday }
    // };
    // return dataObj;
  },

  getApiData() {
    return fetch(`http://api.wunderground.com/api/${key.weatherUnderGroundKey}/conditions/hourly/forecast10day/q/co/denver.json`)
    .then(data => data.json())
    // .then(json => cleanData(json))
  }
}