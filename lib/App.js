import React, { Component } from 'react';
import Header from './Header.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import Search from './Search.js';
import './App.scss';
import key from './key.js'
import data from "./dataAPI.js";
import api from './api.js'

const forecast = data.forecast;
const tenDay = forecast.simpleforecast.forecastday;
const current = tenDay[0];
const icons = {
  clear: { black: '../assets/sun-icon.svg', blue: '../assets/sunny-cloud.gif' },
  partlycloudy: { black: '../assets/cloudy-icon.svg', blue: '../assets/cloudy.gif' },
  mostlycloudy: { black: '../assets/sunny-cloud-icon.svg', blue: '../assets/sunny.gif' },
  chancerain: { black: '../assets/rain-sun-icon.svg', blue: '../assets/rain-sun.gif' },
  rain: { black: '../assets/rain-icon.svg', blue: '../assets/rain.gif' },
  snow: { black: '../assets/snow-icon.svg', blue: '../assets/snow.gif' },
  cloudy: { black: '../assets/cloudy-icon.svg', blue: '../assets/cloudy.gif' }
};
// console.log(key.weatherUnderGroundKey);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  // componentDidMount() {
  //   this.getWeatherData();
  // }

  getWeatherData() {
    api.getApiData()
    .then(dataObj => this.setState({ data: dataObj}) )
    .then(console.log(this.state.data))
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='App'>
          <Header />
          <Search />
          <Current
            city={data.current_observation.display_location.full}
            weather={current.conditions}
            weekday={current.date.weekday}
            month={current.date.monthname}
            day={current.date.day}
            current={data.current_observation.temp_f}
            high={current.high.fahrenheit}
            low={current.low.fahrenheit}
            icon={icons}
            weatherCondition={current.icon}
          />
          <SevenHour
            forcast={data.hourly_forecast.slice(0, 7)}
            icon={icons}
          />
          <TenDay
            days={tenDay}
            icon={icons}
          />
          <Footer />
        </div>
      </div>
    );
  };
}