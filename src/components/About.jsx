import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Helios Labs
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          We are a team of passionate developers and designers creating innovative solutions.
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-500">
              To deliver high-quality software solutions that empower businesses and improve lives.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Our Values</h3>
            <ul className="mt-4 text-gray-500 list-disc list-inside">
              <li>Innovation</li>
              <li>Quality</li>
              <li>Collaboration</li>
              <li>Transparency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
