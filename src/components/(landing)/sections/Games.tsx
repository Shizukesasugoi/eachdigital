import Image from 'next/image';
import React from 'react';

const gamesData = [
  {
    title: "EACH may naturally feel like a game at times but we do want to provide some In the future, even having mini-games In your Timeline where you can opt in to play with someone you've never met.",
    imageUrl: '/images/games/1.jpg',
  },
  {
    title: "EACH may naturally feel like a game at times but we do want to provide some In the future, even having mini-games In your Timeline where you can opt in to play with someone you've never met.",
    imageUrl: "/images/games/2.jpg",
  },
];

const Games = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-right bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gamesData.map((game, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <Image
                width={500}
                height={500}
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg text-gray-300">{game.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Games;