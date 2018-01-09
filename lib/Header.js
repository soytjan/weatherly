import '../css/Header.scss';
import React from 'react';

const Header = () => {
  return (
    <div className='Header'>
      <div className='header-title'>
        <h1>Weatherly</h1>
        <img src='../assets/umbrella.gif' className='logo' />
      </div>
    </div>
  );
};

export default Header;