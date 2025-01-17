import React from 'react';
import { useServices } from '../useServices';

export function SortSelect() {
  const { sortBy, setSortBy } = useServices();
  
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as 'price' | 'name')}
      className="w-full px-4 py-2 bg-black border border-white/10 text-white rounded-lg focus:outline-none focus:border-emerald-500"
    >
      <option value="name">Sort by Name</option>
      <option value="price">Sort by Price</option>
    </select>
  );
}
