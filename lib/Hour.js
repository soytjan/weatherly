import React from 'react';
import './Hour.scss';

const Hour = (props) => {
  return (
    <div className='Hour'>
      <p>{props.hour}</p>
      <div className='img-box'>
        <img src={props.icon[props.weatherCondition].black} alt='sunny icon' />
      </div>
      <p>{props.discription}</p>
      <p>{props.temp} &deg;</p>
    </div>
  );
};

export default Hour;