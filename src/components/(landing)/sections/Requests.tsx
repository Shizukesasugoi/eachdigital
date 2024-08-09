import React from 'react';

const Requests = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
          Request
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg">
            <p className="text-xl text-gray-300 leading-relaxed">
              Make any type of request you'd like to see someone do or perform. If you think they did it right, they can get rewarded. Famous or not, everyone can benefit by completing these quests. We will even post our own. They may be something you can do at home, outdoors, or something you'll need to find in your environment. We will have mixed reality requests so that you can see your rewards. You might find an avatar, or pieces to style one. You might get rare badges you can't get from using the platform, or you may just get a chest of points. Maybe there will be rare themes, maybe there will be a sticker pack only you will have.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-gray-900 to-gray-900 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Requests;