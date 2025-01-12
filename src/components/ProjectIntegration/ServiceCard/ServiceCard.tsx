import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, price, icon }: ServiceCardProps) {
  return (
    <div className="bg-black border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:transform hover:-translate-y-2">
      <div className="mb-4 text-emerald-400">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 h-24">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold">
          From ${price.toLocaleString()}
        </span>
        <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}