import React from "react";

const AlgorithmPower = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
          We Want You To Feel Comfortable When It Comes Down To Algorithms
        </h2>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Detailed interests selections give you far more control over your experience.
        </p>
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4">How Our Algorithm Works</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Personalized content based on your interests</li>
            <li>Transparent control over your feed</li>
            <li>Option to discover new content outside your comfort zone</li>
            <li>Regular updates to improve accuracy and relevance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmPower;