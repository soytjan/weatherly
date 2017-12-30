import React from 'react';
import './Hour.scss';

const Hour = () => {
  return (
    <div className='Hour'>
      <p>9 AM</p>
      <div className='img-box'>
        <img src='../assets/storm-rain-icon.svg' alt='sunny icon' />
      </div>
      <p>Mostly clear</p>
      <p>55 &deg;</p>
    </div>
  );
};

export default Hour;