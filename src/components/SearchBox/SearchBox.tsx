import React, { useState } from 'react';

export interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => { setQuery(e.target.value); onSearch(e.target.value); }}
    />
  );
};

export default SearchBox;