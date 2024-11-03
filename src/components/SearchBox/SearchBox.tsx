import React, { useState } from 'react';
import classNames from 'classnames';

export interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  theme?: 'light' | 'dark'; // Add theme prop
  className?: string; // For additional styling
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search...",
  onSearch,
  theme = 'light', // Default theme
  className,
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  // Dynamic class names based on the theme and additional classes
  const inputClassNames = classNames(
    'p-2 rounded-md border transition-colors duration-200',
    'font-sans',
    {
      'bg-white border-gray-300 text-gray-800': theme === 'light',
      'bg-gray-800 border-gray-600 text-white': theme === 'dark',
    },
    className
  );

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={handleChange}
      className={inputClassNames}
    />
  );
};

export default SearchBox;