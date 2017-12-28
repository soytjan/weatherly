import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <form className="Search">
      <label htmlFor="seach-box">
        <input id="search-box" type="text" placeholder="search" />
      </label>
    </form>
  );
};

export default Search;