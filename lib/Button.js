import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  constructor() {
    super();

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    console.log('button clicked');
  }

  render() {
    return (
      <button onClick={this.handleBtnClick} className='button'>
        Search
      </button>
    );
  }
};
