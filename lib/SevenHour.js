import React from 'react';
import Hour from './Hour.js';
import './SevenHour.scss';

const SevenHour = (props) => {
  return (
    <section className='SevenHour'>
      <h2 className='box-header'>TODAY</h2>
      <div className='hours-grid bottom-container'>
        {
          props.forcast.map((prop) => {
            return <Hour hour={prop.FCTTIME.civil}
              discription={prop.condition}
              temp={prop.temp.english}
              weatherCondition={prop.icon}
              icon={props.icon}
            />;
          })
        }
      </div>
    </section>
  );
};

export default SevenHour;