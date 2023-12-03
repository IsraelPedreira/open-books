import React, { useState, useEffect } from 'react';
import s from './SearchBar.module.css';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    props.setAppQuery(query);
  }, [query, props.setAppQuery]);

  const handleSearch = () => {
    props.onQuery();
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
      <button onClick={handleSearch} className={s.searchButton}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
