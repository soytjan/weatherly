import React from 'react';
import './Welcome.scss';

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true;
    }
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='App'>
          <Header />
          <Search className='welcome'/>
          {/* <Current
            city={data.current_observation.display_location.full}
            weather={current.conditions}
            weekday={current.date.weekday}
            month={current.date.monthname}
            day={current.date.day}
            current={data.current_observation.temp_f}
            high={current.high.fahrenheit}
            low={current.low.fahrenheit}
            icon={icons}
            weatherCondition={current.icon}
          />
          <SevenHour
            forcast={data.hourly_forecast.slice(0, 7)}
            icon={icons}
          />
          <TenDay
            days={tenDay}
            icon={icons}
          /> */}
          <Footer />
        </div>
      </div>
    );
  }
};

export default Welcome;