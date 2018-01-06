import React from 'react';
import '../css/Welcome.scss';
import Search from './Search.js';

const Welcome = (props) => {
  return (
    <div className='Welcome wrapper'>
      <Search getWeatherData={props.getWeatherData}/>
    </div>
  );
};

export default Welcome;