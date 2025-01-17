import React from 'react';

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Team
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Meet the talented individuals behind Helios Labs
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img 
            className="w-32 h-32 rounded-full mx-auto"
            src="https://via.placeholder.com/150"
            alt="Team member"
          />
          <h3 className="mt-4 text-xl font-bold text-gray-900 text-center">
            John Doe
          </h3>
          <p className="mt-2 text-gray-500 text-center">
            CEO & Founder
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <img 
            className="w-32 h-32 rounded-full mx-auto"
            src="https://via.placeholder.com/150"
            alt="Team member"
          />
          <h3 className="mt-4 text-xl font-bold text-gray-900 text-center">
            Jane Smith
          </h3>
          <p className="mt-2 text-gray-500 text-center">
            CTO
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <img 
            className="w-32 h-32 rounded-full mx-auto"
            src="https://via.placeholder.com/150"
            alt="Team member"
          />
          <h3 className="mt-4 text-xl font-bold text-gray-900 text-center">
            Alex Johnson
          </h3>
          <p className="mt-2 text-gray-500 text-center">
            Lead Developer
          </p>
        </div>
      </div>
    </div>
  );
}
