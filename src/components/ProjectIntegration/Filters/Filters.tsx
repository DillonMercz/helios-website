import React from 'react';
import { SearchBar } from './SearchBar';
import { PriceRange } from './PriceRange';
import { SortSelect } from './SortSelect';

export function Filters() {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1">
        <SearchBar />
      </div>
      <div className="w-full sm:w-64">
        <PriceRange />
      </div>
      <div className="w-full sm:w-48">
        <SortSelect />
      </div>
    </div>
  );
}