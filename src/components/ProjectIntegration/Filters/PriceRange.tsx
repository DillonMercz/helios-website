import React from 'react';
import { useServices } from '../../hooks/useServices';

export function PriceRange() {
  const { priceRange, setPriceRange } = useServices();
  const [min, max] = priceRange;

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-400">Price Range</label>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min={0}
          max={10000}
          value={min}
          onChange={(e) => setPriceRange([parseInt(e.target.value), max])}
          className="w-full accent-emerald-500"
        />
        <input
          type="range"
          min={0}
          max={10000}
          value={max}
          onChange={(e) => setPriceRange([min, parseInt(e.target.value)])}
          className="w-full accent-emerald-500"
        />
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>${min.toLocaleString()}</span>
        <span>${max.toLocaleString()}</span>
      </div>
    </div>
  );
}