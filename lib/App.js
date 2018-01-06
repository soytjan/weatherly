import React, { Component } from 'react';
import SevenHour from './SevenHour.js';
import Current from './Current.js';
// import {data} from "./dataAPI.js";
import Footer from './Footer.js';
import TenDay from './TenDay.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import Header from './Header.js';

import api from './api.js';
import key from './key.js';
import Cities from './Cities.js';
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
      data: undefined,
      welcome: false,

    };

    this.getWeatherData = this.getWeatherData.bind(this);
  }

  // Call getWeatherData on Search when user clicks the button
  componentDidMount() {
    this.getWeatherData('Denver');
  }

  filterCity(query) {
    let city = Cities.data.filter((city) =>
      city.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
  
    let cityArray = city[0].split(', ').reverse();
  
    cityArray[1] = cityArray[1].split(' ').join('_');
  
    return cityArray[0] + '/' + cityArray[1];
  }

  // makeLocationHtml(location) {
  //   let array = location.split(', ').reverse();
  
  //   array[1] = array[1].split(' ').join('_');
  
  //   return array[0] + '/' + array[1];
  // }

  // need to either make a new method that searches for the city input in Search component or pass this into the search bar
  getWeatherData(location) {
    let htmlLocation = this.filterCity(location);
    console.log(htmlLocation);
    api.getApiData(htmlLocation)
      .then(cleanData => {
        this.setState({ data: cleanData })
      })
      .catch(console.log('Danger!!'))
  }

  render() {
    if (this.state.data) {
      return (
        <div className='wrapper-welcome'>
          <div className={this.state.welcome ? 'App App-welcome' : 'App App-main'}>
            <Header />
            {
              !this.state.welcome &&
              <Search 
                getWeatherData={this.getWeatherData}
              />
            }
            {
              this.state.welcome &&
              <Welcome />
            }
            
            {
              !this.state.welcome &&
              <Current
                city={this.state.data.current.city}
                weather={this.state.data.days[0].conditions}
                weekday={this.state.data.days[0].weekday}
                month={this.state.data.days[0].month}
                day={this.state.data.days[0].day}
                current={this.state.data.current.current}
                high={this.state.data.days[0].high}
                low={this.state.data.days[0].low}
                icon={icons}
                weatherCondition={this.state.data.days[0].weatherCondition}
                summary={this.state.data.current.summary}
              />
            }
            {
              !this.state.welcome &&
              <SevenHour
                forecast={this.state.data.hours}
                icon={icons}
              />
            }
            {
              !this.state.welcome &&
              <TenDay
                days={this.state.data.days}
                icon={icons}
              />
            }
            
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div className='App App-welcome'>
          <Header />
          <h1>LOADING...</h1>
          <Footer />
        </div>
      );
    }
  };
}