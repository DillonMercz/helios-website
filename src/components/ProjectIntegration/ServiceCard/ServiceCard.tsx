import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, price, icon }: ServiceCardProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="media-object">
          <div className="bg-black rounded-full p-1 flex gap-1">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
            >
              Back to Main
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 max-w-7xl mx-auto px-4">
        <div className="bg-black/50 border border-white/20 rounded-xl p-8 transition-all duration-300 hover:border-blue-500 hover:transform hover:-translate-y-2">
          <div className="mb-6 text-blue-400 text-4xl">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold text-lg">
              From ${(price || 0).toLocaleString()}
            </span>
            <button 
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              onClick={() => navigate('/contact')}
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background color extension */}
      <div className="fixed inset-0 -z-10 bg-black" />
    </div>
  );
}
