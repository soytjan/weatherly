import React from 'react';
import Hour from './Hour.js';
import './SevenHour.scss';

const SevenHour = (props) => {
  return (
    <div className='SevenHour'>
      <h2 className='box-header'>TODAY</h2>
      <div className='hours-grid bottom-container'>
      {console.log(props.forcast[0].condition)}
        {
        props.forcast.map((prop, index) => {
           return <Hour hour={prop.FCTTIME.hour}
                discription={prop.condition}
                temp={prop.temp.english}
          />
        })
      }
      </div>
    </div>
  );
};

export default SevenHour;