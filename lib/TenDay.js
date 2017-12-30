import React from 'react';
import Card from './Card.js'
import './TenDay.css';

const TenDay = () => {
  return (
    <div className='TenDay'>
      <h2>10 Day Forecast</h2>
      <div className='cards-grid'>
        <Card />
      </div>
    </div>
  );
};

export default TenDay;