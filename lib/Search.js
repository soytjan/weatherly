import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="Search">
     <p>Search</p>
      <form>
        <label htmlFor="seach-box">
          <input id="search-box" type="text" placeholder="search" />
        </label>
      </form>
   </div>
  );
};

export default Search;