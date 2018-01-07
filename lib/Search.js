import { Trie } from '@goodalls/complete-me';
import React, { Component } from 'react';
import Button from './Button.js';
import cities from './cities.js';
import '../css/Search.scss';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      suggestedCities: []
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.trie = new Trie;
    this.trie.populate(cities.data);
    // this.trie.populate(Object.keys(Zip));
    // console.log(this.Trie);
    
    
  }

  handleCityChange(e) { 
    this.setState({
      city: e.target.value,
      suggestedCities: this.suggestCities(e)
    });
  }

  suggestCities(e) {
    let suggestions = [];

    if (e.target.value.length >= 3) {
      suggestions = this.trie.suggest(e.target.value.toLowerCase());
    }

    return suggestions.slice(0, 10);
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
                        list="cities" 
                        type="search" 
                        onChange={this.handleCityChange}
                        onKeyPress={this.handleKeyPress} 
                        placeholder="Enter City and State, Zip Code" 
                />
              </label>

              <datalist id='cities'>
                { 
                  this.state.suggestedCities.map((suggestion, index) => {
                    return (<option value={suggestion} key={index}/>);
                  })
                }
              </datalist>
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

