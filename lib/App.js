import React, { Component } from 'react';
import SevenHour from './SevenHour.js';
import Current from './Current.js';
import Welcome from './Welcome.js';
import Header from './Header.js';
import cities from './cities.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import Search from './Search.js';
import api from './api.js';
import '../css/App.scss';


const icons = {
  mostlycloudy: { black: '../assets/sunny-cloud-icon.svg', 
                  blue: '../assets/sunny.gif' },
  chancerain: { black: '../assets/rain-sun-icon.svg', 
                blue: '../assets/rain-sun.gif' },
  partlycloudy: { black: '../assets/cloudy-icon.svg', 
                  blue: '../assets/cloudy.gif' },
  cloudy: { black: '../assets/cloudy-icon.svg', 
            blue: '../assets/cloudy.gif' },
  clear: { black: '../assets/sun-icon.svg', 
            blue: '../assets/sunny.gif' },
  snow: { black: '../assets/snow-icon.svg',   
          blue: '../assets/snow.gif' },
  rain: { black: '../assets/rain-icon.svg', 
          blue: '../assets/rain.gif' },
  fog: {  black: '../assets/cloudy-icon.svg',
          blue: '../assets/cloudy.gif' }, 
  sleet: { black: '../assets/snow-icon.svg',
            blue: '../assets/snow.gif'}     
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined
    };
    
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    if (this.state.data) {
      this.getWeatherData(this.state.data.city);  
    } 
    if (localStorage.length) {
      this.getWeatherData(localStorage.getItem('location'));
    }
  }
  
  // filterCity(query) {
  //   let city = cities.data.filter((city) =>
  //     city.toLowerCase().indexOf(query.toLowerCase()) > -1
  //   );

  //   let cityArray = city[0].split(', ').reverse();

  //   cityArray[1] = cityArray[1].split(' ').join('_');

  //   return cityArray[0] + '/' + cityArray[1];
  // }


  buildCityHtml(location) {
    let splitLocation = location.split(', ').reverse();

    splitLocation[1] = splitLocation[1].split(' ').join('_');

    console.log(splitLocation[0] + '/' + splitLocation[1])

    return splitLocation[0] + '/' + splitLocation[1];
  }

  getWeatherData(location) {
    let htmlLocation;

    if (parseInt(location)) {
      htmlLocation = location;
    } else {
      htmlLocation = this.buildCityHtml(location);
    }

    api.getApiData(htmlLocation)
      .then(cleanData => {
        this.setState({ data: cleanData });
      })
      .catch(error => alert('location not found, please try again.' + error));

    localStorage.setItem('location', location);
  }

  render() {
    if (this.state.data) {
      return (
          <div className='App App-main'>
            <Header />
            <Search
              getWeatherData={this.getWeatherData}
            />
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
            <SevenHour
              forecast={this.state.data.hours}
              icon={icons}
            />
            <TenDay
              days={this.state.data.days}
              icon={icons}
            />
            <Footer />
          </div>
      );
    } else {
      return (
        <div className='App App-welcome'>
          <Header />
          <Welcome getWeatherData={this.getWeatherData} />
          <Footer />
        </div>
      );
    }
  }
}