import React from 'react';
import Card from './Card.js';
import './TenDay.scss';

const TenDay = (props) => {
  return (
    <section className='TenDay'>
      <h2>10 Day Forecast</h2>
      <div className='cards-grid'>
       {
        props.days.map((day, index) => {
          return <Card 
            key={index}
            styleName='Day' 
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
    </section>
  );
};

export default TenDay;