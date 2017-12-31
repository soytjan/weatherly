import React from 'react';
import './Hour.scss';

const Hour = (props) => {
  return (
    <div className='Hour'>
      <p>{props.hour}</p>
      <div className='img-box'>
        {/* need to add in the icon prop some how. */}
        <img src={props.icon[props.weatherCondition]} alt='sunny icon' />
      </div>
      <p>{props.discription}</p>
      <p>{props.temp} &deg;</p>
    </div>
  );
};

export default Hour;