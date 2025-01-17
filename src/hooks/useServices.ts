import { create } from "zustand";
import { services } from "../data/services";

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  categories: string[];
}

interface ServicesStore {
  searchQuery: string;
  selectedCategories: string[];
  sortOrder: "asc" | "desc";
  priceRange: [number, number];
  setSearchQuery: (query: string) => void;
  toggleCategory: (category: string) => void;
  setSortOrder: (order: "asc" | "desc") => void;
  setPriceRange: (range: [number, number]) => void;
  getFilteredServices: () => Service[];
}

export const useServices = create<ServicesStore>((set, get) => ({
  searchQuery: "",
  selectedCategories: [],
  sortOrder: "asc",
  priceRange: [0, 1000],
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleCategory: (category) => set((state) => ({
    selectedCategories: state.selectedCategories.includes(category)
      ? state.selectedCategories.filter(c => c !== category)
      : [...state.selectedCategories, category]
  })),
  setSortOrder: (order) => set({ sortOrder: order }),
  setPriceRange: (range) => set({ priceRange: range }),

  getFilteredServices: () => {
    const { searchQuery, selectedCategories, sortOrder, priceRange } = get();
    
    return services
      .filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategories.length === 0 || service.categories.some(cat => selectedCategories.includes(cat))) &&
        service.price >= priceRange[0] &&
        service.price <= priceRange[1]
      )
      .sort((a, b) => 
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
  }
}));
