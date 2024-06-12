import React from 'react';

import { SearchIcon } from './Icons';

export const SearchBar: React.FC<{
  filterRows: (searchTerm: string) => void;
}> = ({ filterRows }) => (
  <div className="w-full h-14 flex items-center pl-2 relative">
    <input
      type="text"
      id="search"
      name="search"
      placeholder="Search"
      className="h-8 mr-2 align-middle pl-10 border border-gray-300 rounded shadow-sm"
      onChange={(e) => filterRows(e.target.value)}
    />
    <SearchIcon />
  </div>
);
