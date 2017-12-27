import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div>Check</div>
      {<Header />}
      {<Footer />}
    </div>
  );
};

export default App;