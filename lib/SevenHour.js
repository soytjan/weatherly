import React from 'react';
import Card from './Card.js';
import './SevenHour.scss';

const SevenHour = (props) => {
  return (
    <section className='SevenHour'>
      <h2 className='box-header'>TODAY</h2>
      <div className='hours-grid bottom-container'>
        {
          props.forecast.map((hour, index) => {
            return <Card 
              key={index}
              styleName='Hour'
              hour={hour.hour}
              weather={hour.weather}
              temp={hour.temp}
              weatherCondition={hour.weatherCondition}
              icon={props.icon}
            />;
          })
        }
      </div>
    </section>
  );
};

export default SevenHour;