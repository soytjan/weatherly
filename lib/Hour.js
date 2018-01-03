import React from 'react';
import './Hour.scss';

const Hour = (props) => {
  return (
    <div className='Hour'>
      <p className='hour-time'>{props.hour}</p>
      <div className='img-box'>
        <img src={props.icon[props.weatherCondition].black} alt={props.weatherCondition} />
      </div>
      <p className='hour-description center'>{props.discription}</p>
      <p>{props.temp} &deg;</p>
    </div>
  );
};

export default Hour;