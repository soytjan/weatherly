import PropTypes from 'prop-types';
import '../css/SevenHour.scss';
import Card from './Card.js';
import React from 'react';

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

SevenHour.propTypes = {
  icon: PropTypes.object,
  forecast: PropTypes.array
};

export default SevenHour;