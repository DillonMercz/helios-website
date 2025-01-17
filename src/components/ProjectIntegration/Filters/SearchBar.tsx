import React from 'react';
import { Search } from 'lucide-react';
import { useServices } from '../useServices';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useServices();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search services..."
        className="w-full pl-10 pr-4 py-2 bg-black border border-white/10 text-white rounded-lg focus:outline-none focus:border-emerald-500"
      />
    </div>
  );
}
