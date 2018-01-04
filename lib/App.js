import React, { Component } from 'react';
import Header from './Header.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import { data } from './data.js';
import Search from './Search.js';
import Welcome from './Welcome.js';

import './App.scss';
import key from './key.js'

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
      current: {},
      hourly: [],
      days: [],
      welcome: false,
    };
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    // api.getApiData()
    // .then(dataObj => this.setState({ data: dataObj}));
    this.setState({data: api.cleanData(data)})
  }

  // getWeatherInfo() {
  //   fetch(`http://api.wunderground.com/api/${key.weatherUnderGroundKey}/conditions/hourly/forecast10day/q/co/denver.json`)
  //   .then(data => data.json())
  //   .then(cleanup)
  //   .then(json => this.setState({ data: json.results }) )
  //   // .then(data => localStorage.setItem('denver', data))
  //   .catch(error => console.log('there is an error'))
  //   console.log(this.state.data);
    
  // }

  render() {
    return (
      <div className='wrapper-welcome'>
        <div className={this.state.welcome ? 'App App-welcome' : 'App App-main'}>
          <Header />
          {
            !this.state.welcome &&
            <Search />
          }
          {
            this.state.welcome && 
            <Welcome /> 
          }
          { 
            !this.state.welcome &&
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
            weatherCondition={current.icon} />
          }
          {  
            !this.state.welcome &&
          <SevenHour
            forcast={data.hourly_forecast.slice(0, 7)}
            icon={icons} />
          }
          {  
            !this.state.welcome &&
          <TenDay
            days={tenDay}
            icon={icons} /> 
          }
          <Footer />
        </div>
      </div>
    );
  };
}