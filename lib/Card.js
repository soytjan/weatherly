import React from 'react';
import './Card.scss';

export default class Card extends React.Component {
  render() {
    let iconColor = 'black';

    if (this.props.low) {
      iconColor = 'blue';
    }

    return (
      <div className={this.props.styleName}>
        {
          this.props.low &&
          <div className='center'>
            <h2>{this.props.weekday}</h2>
            <p className='date'>{this.props.month} {this.props.day}</p>
          </div>
        }

        {
          this.props.hour &&
          <p className='hour-time'>{this.props.hour}</p>
        }

        <div className='img-box'>
          <img src={this.props.icon[this.props.weatherCondition][iconColor]} alt={this.props.weather} />
        </div>

        <div className={this.props.low ? 'day-weather' : 'hour-weather center'}>
          <h3>{this.props.weather}</h3>
        </div>
        
        {
          this.props.hour &&
          <p>{this.props.temp} &deg;</p>
        }

        {
          this.props.low &&
          <div className='high-low-container'>
            <div className='center'>
              <h4 className='regular'>HIGH</h4>
              <h4>{this.props.high} &deg;</h4>
            </div>
            <div className='center'>
              <h4 className='regular'>LOW</h4>
              <h4>{this.props.low} &deg;</h4>
            </div>
          </div>
        }

      </div>
    );
  }
};

