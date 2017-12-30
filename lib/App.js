import React, { Component } from 'react';
import Header from './Header.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import { data } from './data.js';
import Search from './Search.js'

import './App.css';

const forecast = data.forecast;
const current = forecast.simpleforecast.forecastday[0];

const App = () => {
  return (
    <div className='wrapper'>
      <div className='App'>
        <Header />
        <Search />
        <Current city={data.current_observation.display_location.full} weather={current.conditions} weekday={current.date.weekday} month={current.date.monthname} day={current.date.day} high={current.high.fahrenheit} low={current.low.fahrenheit} />
        <SevenHour />
        <TenDay />
        <Footer />
      </div>
    </div>
  );
};

export default App;