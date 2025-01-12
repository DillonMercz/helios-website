import React from 'react';
import { categories } from '../../data/categories';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <div className="w-full lg:w-64 space-y-6">
      {categories.map((category) => (
        <div key={category.title} className="space-y-3">
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
          <div className="space-y-2">
            {category.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === item.id
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}