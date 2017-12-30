import React from 'react';
import './Current.scss';

const Current = (props) => {
  return (
    <div className='Current'>
      <h2 className='box-header'>{props.city}</h2>
      <div className='bottom-container'>
        <img src='../assets/sunny.gif' alt='sunny weather icon' />
        <div className='center'>
          <h3>{props.weather}</h3>
          <h4 className='day'>{props.weekday}</h4>
          <p className='date'>{props.month} {props.day}</p>
        </div>
        <div className='high-low-container'>
            <div className='center'>
              <h4>HIGH</h4>
              <h4 className='temp'>{props.high} &deg;F</h4>
            </div>
            <div className='center'> 
              <h4>LOW</h4>
              <h4 className='temp'>{props.low} &deg;F</h4>
            </div>
        </div>
        <div className='center'>
          <h5>Summary</h5>
          <p>It's cold outside! Wear a warm jacket and boots!</p>
        </div>
      </div>
    </div>
  );
};

export default Current;