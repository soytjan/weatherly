import React, { Component } from 'react';
import SevenHour from './SevenHour.js';
// import {data} from "./dataAPI.js";
import Welcome from './Welcome.js';
import Current from './Current.js';
import Search from './Search.js';
import Header from './Header.js';
import Footer from './Footer.js';
import TenDay from './TenDay.js';
import key from './key.js';
import api from './api.js';
import '../css/App.scss';

const icons = {
  mostlycloudy: { black: '../assets/sunny-cloud-icon.svg', blue: '../assets/sunny.gif' },
  chancerain: { black: '../assets/rain-sun-icon.svg', blue: '../assets/rain-sun.gif' },
  partlycloudy: { black: '../assets/cloudy-icon.svg', blue: '../assets/cloudy.gif' },
  cloudy: { black: '../assets/cloudy-icon.svg', blue: '../assets/cloudy.gif' },
  clear: { black: '../assets/sun-icon.svg', blue: '../assets/sunny.gif' },
  snow: { black: '../assets/snow-icon.svg', blue: '../assets/snow.gif' },
  rain: { black: '../assets/rain-icon.svg', blue: '../assets/rain.gif' }
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

  componentDidMount() {
    this.getWeatherData();
  }


  // need to either make a new method that searches for the city input in Search component or pass this into the search bar
  getWeatherData() {
    api.getApiData()
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
              <Search />
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