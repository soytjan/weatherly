import React from 'react';
import './Current.css';

const Current = (props) => {
  return (
    <div className='Current'>
      <h2 className='box-header'>{props.city}</h2>
      <div className='bottom-container'>
        <img src='../assets/sunny.gif' alt='sunny weather icon' />
        <div className='center'>
          <h3>SUNNY</h3>
          <h4 className='day'>Wednesday</h4>
          <p className='date'>December 29</p>
        </div>
        <div className='high-low-container'>
            <div className='center'>
              <h4>HIGH</h4>
              <h4 className='temp'>55 &deg;</h4>
            </div>
            <div className='center'> 
              <h4>LOW</h4>
              <h4 className='temp'>55 &deg;</h4>
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