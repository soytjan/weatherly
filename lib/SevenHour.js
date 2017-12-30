import React from 'react';
import Hour from './Hour.js';
import './SevenHour.scss';

const SevenHour = (props) => {
  return (
    <div className='SevenHour'>
      <h2 className='box-header'>TODAY</h2>
      <div className='hours-grid bottom-container'>
        <Hour />
       {console.log(props)}
       {console.log(props.props[0].temp.english)}
        {
          // will probably need to include some sort of map function that goes through all an object and inserts each hour as it updates
          // Hour.js component? 
        }
      </div>
    </div>
  );
};

export default SevenHour;