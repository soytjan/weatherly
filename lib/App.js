import React, { Component } from 'react';
import Header from './Header.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Footer from './Footer.js';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      {<Header />}
      {<Current />}
      {<SevenHour />}
      {<TenDay />}
      {<Footer />}
    </div>
  );
};

export default App;