import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="Search">
      <p>Show me the weather in...</p>
      <div className='search-container'>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        <form>
          <label htmlFor="seach-box">
            <input id="search-box" type="search" placeholder="Enter City, Zip Code, Place" />
          </label>
        </form>
      </div>
   </div>
  );
};

export default Search;