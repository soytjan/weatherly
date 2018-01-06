import key from './key.js';

export default {
  cleanData(data) {
    let hourArr = data.hourly_forecast.slice(0, 7);
    let dayArr = data.forecast.simpleforecast.forecastday;

    let cleanHourArr = hourArr.map((hour) => {
      return {
        hour: hour.FCTTIME.civil,
        weather: hour.condition,
        temp: hour.temp.english,
        weatherCondition: hour.icon,
      }
    })

    let cleanDayArr = dayArr.map((day) => {
      return {
        weekday: day.date.weekday,
        month: day.date.monthname,
        day: day.date.day,
        weather: day.conditions.toUpperCase(),
        high: day.high.fahrenheit,
        low: day.low.fahrenheit,
        weatherCondition: day.icon,
      }
    });

    let cleanObj = {
      current: {
        //cityState: 
        city: data.current_observation.display_location.full,
        current: data.current_observation.temp_f,
        summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      },
      days: cleanDayArr,
      hours: cleanHourArr,
    };

    return cleanObj;
  }, 

  // can pass in city as a parameter and change out that piece of the code
  
  getApiData(location) {
    return fetch(`http://api.wunderground.com/api/${key.weatherUnderGroundKey}/conditions/hourly/forecast10day/q/${location}.json`)
    .then(data => data.json())
    .then(json => this.cleanData(json))
  }
}