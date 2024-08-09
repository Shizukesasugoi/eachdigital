import React from 'react';

const Inbox = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto md:flex md:justify-end relative z-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-right bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
            Inbox
          </h2>
          <p className="text-lg text-gray-300 mb-8 w-full">
            Get messages, texts, and other platform notifications in one spot. On top of that, get some storage for your very own EACH email address. Use it for business, fun, or as a simple backup!
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-gray-900 to-gray-900 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Inbox;