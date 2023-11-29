

import React, { useState } from 'react';
import s from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={s.container}>
      <input
        className={s.searchInput}
        type="text"
        placeholder="Digite sua busca..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className={s.searchButton}>Buscar</button>
    </div>
  );
}

export default SearchBar;
