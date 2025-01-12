import React from 'react';
import { Menu, X } from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { categories } from '../../data/categories';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onSelectCategory: (category: string) => void;
}

export function Sidebar({ isOpen, onToggle, onSelectCategory }: SidebarProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
          {categories.map((category) => (
            <SidebarItem
              key={category.title}
              title={category.title}
              items={category.items}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
}