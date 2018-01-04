import React, { Component } from 'react';
import SevenHour from './SevenHour.js';
import Current from './Current.js';
// import {data} from "./dataAPI.js";
import Footer from './Footer.js';
import TenDay from './TenDay.js';
import Search from './Search.js';
import Header from './Header.js';
import api from './api.js';
import key from './key.js';
import './App.scss';

// const tenDay = this.state.data.forecast.simpleforecast.forecastday;
// const current = tenDay[0];
const icons = {
  clear: { black: '../assets/sun-icon.svg', blue: '../assets/sunny-cloud.gif' },
  partlycloudy: { black: '../assets/cloudy-icon.svg', blue: '../assets/cloudy.gif' },
  mostlycloudy: { black: '../assets/sunny-cloud-icon.svg', blue: '../assets/sunny.gif' },
  chancerain: { black: '../assets/rain-sun-icon.svg', blue: '../assets/rain-sun.gif' },
  rain: { black: '../assets/rain-icon.svg', blue: '../assets/rain.gif' },
  snow: { black: '../assets/snow-icon.svg', blue: '../assets/snow.gif' },
  cloudy: { black: '../assets/cloudy-icon.svg', blue: '../assets/cloudy.gif' }
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined
    };
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(`http://api.wunderground.com/api/${key.weatherUnderGroundKey}/conditions/hourly/forecast10day/q/co/denver.json`)
    .then(data => data.json())
    .then(json => {
      this.setState({ data: json})
    })
    .catch(console.log('Danger!!'))
  }

  render() {
    console.log(this.state.data);
    if ( this.state.data ) {
      return (
        <div className='wrapper'>
          <div className='App'>
            <Header />
            <Search />
            <Current
              city={this.state.data.current_observation.display_location.full}
              weather={this.state.data.forecast.simpleforecast.forecastday[0].conditions}
              weekday={this.state.data.forecast.simpleforecast.forecastday[0].date.weekday}
              month={this.state.data.forecast.simpleforecast.forecastday[0].date.monthname}
              day={this.state.data.forecast.simpleforecast.forecastday[0].date.day}
              current={this.state.data.current_observation.temp_f}
              high={this.state.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}
              low={this.state.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}
              icon={icons}
              weatherCondition={this.state.data.forecast.simpleforecast.forecastday[0].icon}
              summary={this.state.data.forecast.txt_forecast.forecastday[0].fcttext}
            />
            <SevenHour
              forcast={this.state.data.hourly_forecast.slice(0, 7)}
              icon={icons}
            />
            <TenDay
              days={this.state.data.forecast.simpleforecast.forecastday}
              icon={icons}
            />
            <Footer />
          </div>
        </div>
      );
    }
    return null;
  };
}