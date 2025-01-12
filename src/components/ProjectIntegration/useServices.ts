import { create } from 'zustand';
import { services } from '../data/services';

interface ServicesState {
  searchQuery: string;
  selectedCategory: string;
  priceRange: [number, number];
  sortBy: 'price' | 'name';
  filteredServices: typeof services;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortBy: (sort: 'price' | 'name') => void;
}

export const useServices = create<ServicesState>((set, get) => ({
  searchQuery: '',
  selectedCategory: '',
  priceRange: [0, 10000],
  sortBy: 'name',
  filteredServices: services,

  setSearchQuery: (query) => 
    set((state) => ({
      searchQuery: query,
      filteredServices: filterServices({ ...state, searchQuery: query })
    })),

  setSelectedCategory: (category) =>
    set((state) => ({
      selectedCategory: category,
      filteredServices: filterServices({ ...state, selectedCategory: category })
    })),

  setPriceRange: (range) =>
    set((state) => ({
      priceRange: range,
      filteredServices: filterServices({ ...state, priceRange: range })
    })),

  setSortBy: (sort) =>
    set((state) => ({
      sortBy: sort,
      filteredServices: filterServices({ ...state, sortBy: sort })
    }))
}));

function filterServices(state: Omit<ServicesState, 'filteredServices' | 'setSearchQuery' | 'setSelectedCategory' | 'setPriceRange' | 'setSortBy'>) {
  let filtered = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesCategory = !state.selectedCategory || service.categories.includes(state.selectedCategory);
    const matchesPrice = service.price >= state.priceRange[0] && service.price <= state.priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (state.sortBy === 'price') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
}