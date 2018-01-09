import PropTypes from 'prop-types';
import '../css/Current.scss';
import React from 'react';

const Current = (props) => {
  return (
    <div className='Current'>
      <h2 className='box-header'>{props.city}</h2>
      <div className='bottom-container'>
        <div className='center'>
          <h4 className='day'>{props.weekday}</h4>
          <p className='date'>{props.month} {props.day}</p>
        </div>
        <h3>{props.weather}</h3>
        <img src={props.icon[props.weatherCondition].blue}
          alt='sunny weather icon' />
        <div className='center'>
          <h3 className='currentTemp'>{props.current} &deg;F</h3>
          <div className='high-low-container'>
            <h4 className='high-low'>HIGH
            <span className='temp'>{props.high} &deg;F</span></h4>
            <h4 className='high-low'>LOW
            <span className='temp'>{props.low} &deg;F</span>
            </h4>
          </div>
        </div>
        <div className='center summary'>
          <h5>Summary</h5>
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

Current.propTypes = {
  city: PropTypes.string,
  current: PropTypes.number,
  day: PropTypes.number,
  high: PropTypes.string,
  icon: PropTypes.object,
  low: PropTypes.string,
  month: PropTypes.string,
  summary: PropTypes.string,
  weather: PropTypes.string,
  weatherCondition: PropTypes.string,
  weekday: PropTypes.string
};
export default Current;