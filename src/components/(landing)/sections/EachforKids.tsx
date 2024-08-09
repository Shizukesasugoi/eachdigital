import Image from 'next/image';
import React from 'react';

const EachforKidsPage: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Each For Kids
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold leading-tight">
              Do They Love Your Phone? Did They Just Get Their Own?
            </h2>
            <p className="text-xl text-gray-300">
              We Have a Side Platform Specifically Set For Young Audiences. 
              Being Able to Scroll Through Kid-Friendly, Kid-Made, Kid TV, 
              and Similar Content. Laughs Can Be Enjoyed with Age Appropriate 
              Material. Creators and Productions are Welcome to support.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-200 mb-6">
              We are dedicated to providing a safe and educational online space for kids.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">What Kids Can Do Here</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Learn and explore new topics</li>
              <li>Connect with friends</li>
              <li>Share creative projects</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Images</h3>
          <div className="flex justify-center space-x-4">
            {/* Placeholder for images */}
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
              Image 1
            </div>
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
              Image 2
            </div>
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
              Image 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EachforKidsPage;