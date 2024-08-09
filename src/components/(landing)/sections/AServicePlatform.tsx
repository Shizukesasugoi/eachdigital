import React from "react";

const aServiceData = [
  {
    title: "We're Here to give You What You Need Without All of The Fluff",
    description: "",
  },
  {
    title: "Step Away From The Standard Network and See How We Can",
    description: "Find specialists to help you make and do what you need, read news in detail, get health and fitness instruction, Pay, Send meals and gifts to others, study, read, find support, apply for a grant and more.",
  },
];

const AServicePlatform = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          A Service Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aServiceData.map((service, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-2 text-purple-300">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default AServicePlatform;