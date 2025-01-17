import React from 'react';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Helios Labs Blog
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Insights, updates, and stories from our team
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg">
          <img 
            className="w-full h-48 object-cover rounded-t-lg"
            src="https://via.placeholder.com/400x200"
            alt="Blog post"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">
              The Future of Web Development
            </h3>
            <p className="mt-2 text-gray-500">
              Exploring the latest trends and technologies shaping the web
            </p>
            <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
              Read More →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <img 
            className="w-full h-48 object-cover rounded-t-lg"
            src="https://via.placeholder.com/400x200"
            alt="Blog post"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Building Scalable Systems
            </h3>
            <p className="mt-2 text-gray-500">
              Best practices for designing and implementing scalable architectures
            </p>
            <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
              Read More →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <img 
            className="w-full h-48 object-cover rounded-t-lg"
            src="https://via.placeholder.com/400x200"
            alt="Blog post"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">
              The Power of Open Source
            </h3>
            <p className="mt-2 text-gray-500">
              How open source is driving innovation in software development
            </p>
            <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
              Read More →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          View All Posts
        </a>
      </div>
    </div>
  );
}
