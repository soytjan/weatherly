import React, { Component } from 'react';
import SevenHour from './SevenHour.js';
import Current from './Current.js';
import Welcome from './Welcome.js';
import Header from './Header.js';
import Cities from './Cities.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import Search from './Search.js';
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
      welcome: true

    };

    this.getWeatherData = this.getWeatherData.bind(this);
  }

  // Call getWeatherData on Search when user clicks the button
  componentDidMount() {
    if (this.state.data) {
      this.getWeatherData(this.state.data.city);
    }
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
    let htmlLocation;
    
    if (parseInt(location)) {
      htmlLocation = location;
    } else {  
      htmlLocation = this.filterCity(location);
    }
  
    api.getApiData(htmlLocation)
      .then(cleanData => {
        this.setState({ data: cleanData });
      })
      .catch(console.log('Danger!!'));

    localStorage.setItem('location', htmlLocation);
    

  }

  render() {
    if (this.state.data) {
      console.log('state.data is set');
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
      console.log('state.data is NOT set');
      return (
        <div className='wrapper-welcome'>
          <div className={this.state.welcome ? 'App App-welcome' : 'App App-main'}>
            <Header />
              <Welcome getWeatherData={this.getWeatherData}/>
            <Footer />
          </div>
        </div>
      );
    }
  }
}