import React from 'react';
import Card from './Card.js';
import './TenDay.scss';

const TenDay = (props) => {
  return (
    <div className='TenDay'>
      <h2>10 Day Forecast</h2>
      <div className='cards-grid'>
       {console.log(props.days)}
       {
        props.days.map((day, index) => {
          return <Card 
            key={index} 
            weekday={day.date.weekday} 
            month={day.date.monthname} 
            day={day.date.day} 
            weather={day.conditions.toUpperCase()} 
            high={day.high.fahrenheit} 
            low={day.low.fahrenheit} 
            weatherCondition={day.icon}
            icon={props.icon}
          />
        })
       }
      </div>
    </div>
  );
};

export default TenDay;