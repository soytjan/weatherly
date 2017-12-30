import React from 'react';
import './SevenHour.css';

const SevenHour = () => {
  return (
    <div className='SevenHour'>
      <h2 className='box-header'>TODAY</h2>
      <div className='hours-grid bottom-container'>
        {
          // will probably need to include some sort of map function that goes through all an object and inserts each hour as it updates
          // Hour.js component? 
        }
      </div>
    </div>
  );
};

export default SevenHour;