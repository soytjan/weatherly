import PropTypes from 'prop-types';
import Card from './Card.js';
import '../css/TenDay.scss';
import React from 'react';

const TenDay = (props) => {
  return (
    <section className='TenDay'>
      <h1>10 Day Forecast</h1>
      <div className='cards-grid'>
       {
        props.days.map((day, index) => {
          return <Card 
            key={index}
            styleName='Day' 
            weekday={day.weekday} 
            month={day.month} 
            day={day.day} 
            weather={day.weather} 
            high={day.high} 
            low={day.low} 
            weatherCondition={day.weatherCondition}
            icon={props.icon}
          />;
        })
       }
      </div>
    </section>
  );
};

TenDay.propTypes = {
  icon: PropTypes.string,
  days: PropTypes.string,
  sevenHour: PropTypes.string
};

export default TenDay;