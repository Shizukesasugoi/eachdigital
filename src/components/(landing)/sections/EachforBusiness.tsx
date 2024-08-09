import React from "react";

const aServiceData = [
  {
    title: "Promote Your Business in Unique Ways",
    description: "There are many ways to use EACH to promote your business. Set up your profile to display new campaigns in an engaging format, update dedicated followers automatically, show off custom stickers and themes, launch quest adventures, and provide other incentives.",
  },
  {
    title: "Step Away From The Standard Network",
    description: "Find specialists to help you make and do what you need, read detailed news, get health and fitness instruction, pay, send meals and gifts to others, study, read, find support, apply for a grant and more.",
  },
];

const EachforBusiness = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Each for Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aServiceData.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EachforBusiness;