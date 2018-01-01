import React, { Component } from 'react';
import Header from './Header.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import { data } from './data.js';
import Search from './Search.js';
import './App.scss';

const forecast = data.forecast;
const tenDay = forecast.simpleforecast.forecastday;
const current = tenDay[0];
const icons = {
  clear: '../assets/sun-icon.svg',
  partlycloudy: '../assets/cloudy-icon.svg',
  mostlycloudy: '../assets/sunny-cloud-icon.svg'
};

const App = () => {
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

export default App;