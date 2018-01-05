import React, { Component } from 'react';
import './Search.scss';
import Button from './Button.js'

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
    }

    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
    console.log(this.state.city)
  }

  // need to pass this in when button is clicked --> this.props.getWeather(this.state.city) 

  render() {
    return (
      <div className="Search">
        <p>Show me the weather in...</p>
        <div className='search-container'>
          <div className='search-bar'>
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
            <form>
              <label htmlFor="seach-box">
                <input id="search-box" type="search" onChange={this.handleCityChange} placeholder="Enter City and State, Zip Code" />
              </label>
            </form>
          </div>
          <Button />
        </div>
     </div>
    );
  }
};

