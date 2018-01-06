import { Trie } from '@goodalls/complete-me';
import React, { Component } from 'react';
import Button from './Button.js';
import '../css/Search.scss';
import Cities from './Cities.js';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      city: ''
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.trie = new Trie;
    this.trie.populate(Cities.data);
    console.log(this.trie);
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  // look into clearing out input field when submit
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.getWeatherData(this.state.city);
    }
  }

  render() {
    return (
      <div className="Search">
        <p>Show me the weather in...</p>
        <div className='search-container'>
          <div className='search-bar'>
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
            <form>
              <label htmlFor="seach-box">
                <input  id="search-box" 
                        type="search" 
                        onChange={this.handleCityChange} 
                        placeholder="Enter City and State, Zip Code" 
                />
              </label>
            </form>
          </div>
         <button  onClick={() => this.props.getWeatherData(this.state.city)} 
                  className='button'>
        Search
      </button>
        </div>
     </div>
    );
  }
}

