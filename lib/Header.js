import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <div className='header-title'>
        <h1>Weatherly</h1>
        <img src='../assets/umbrella.gif' className='logo'/>
      </div>
    </div>
  );
};

export default Header;