import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='Card'>
      <div className='center'>
        <h2>Monday</h2>
        <p className='date'>December 29</p>
      </div>  
      <img src='../assets/sunny.gif' alt='sunny weather icon' />
      <h3>SUNNY</h3>
      <div className='high-low-container'>
          <div className='center'>
            <h4 className='regular'>HIGH</h4>
            <h4>55 &deg;</h4>
          </div>
          <div className='center'> 
            <h4 className='regular'>LOW</h4>
            <h4>55 &deg;</h4>
          </div>
      </div>
    </div>
  );
};

export default Card;