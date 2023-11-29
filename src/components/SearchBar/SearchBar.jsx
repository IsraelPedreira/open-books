

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite sua busca..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
