import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <div className='Card'>
      <div className='center'>
        <h2>{props.weekday}</h2>
        <p className='date'>{props.month} {props.day}</p>
      </div>
      <img src={props.icon[props.weatherCondition].blue} alt={props.weather} />
      <div className='weather-box'>
        <h3>{props.weather}</h3>
      </div>
      <div className='high-low-container'>
        <div className='center'>
          <h4 className='regular'>HIGH</h4>
          <h4>{props.high} &deg;</h4>
        </div>
        <div className='center'>
          <h4 className='regular'>LOW</h4>
          <h4>{props.low} &deg;</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;