import React from 'react';

const Performances = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
          Performances
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg">
            <p className="text-xl text-gray-300 leading-relaxed">
              We Want to Support Artists, Creators, and other EACH users as much as possible. We will regularly give chances to be rewarded for showing off what you do.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-gray-900 to-gray-900 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Performances;