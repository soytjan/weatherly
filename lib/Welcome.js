import React from 'react';
import './Welcome.scss';
import Search from './Search.js'

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true,
    }
  }

  render () {
    return (
      <div className='Welcome wrapper'>
       
          <Search />
          
      </div>
    );
  }
};