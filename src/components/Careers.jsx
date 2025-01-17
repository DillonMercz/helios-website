import React from 'react';

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Careers at Helios Labs
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Join our team and help shape the future of software development
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Current Openings</h3>
          <div className="mt-6 space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h4>
              <p className="mt-2 text-gray-500">Full-time · Remote</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">UI/UX Designer</h4>
              <p className="mt-2 text-gray-500">Full-time · Hybrid</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">Why Join Us?</h3>
          <div className="mt-6 space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">Competitive Benefits</h4>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Health insurance</li>
                <li>401(k) matching</li>
                <li>Flexible PTO</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">Work Environment</h4>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Remote-first culture</li>
                <li>Professional development</li>
                <li>Cutting-edge technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
