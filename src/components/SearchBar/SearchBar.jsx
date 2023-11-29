import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import s from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(query);
    }
  };

  return (
    <div className={s.searchBarContainer}>
      <label htmlFor="searchInput">Digite sua busca</label>
      <div className={s.inputContainer}>
        <input
          type="text"
          id="searchInput"
          placeholder="Dom Casmurro"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>
          <FaSearch /> 
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
