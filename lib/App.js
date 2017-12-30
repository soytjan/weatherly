import React, { Component } from 'react';
import Header from './Header.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';
import { data } from './data.js';
import Search from './Search.js'

import './App.css';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='App'>
        <Header />
        <Search />
        <Current city='Denver' />
        <SevenHour />
        <TenDay />
        <Footer />
      </div>
    </div>
  );
};

export default App;