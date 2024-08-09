import React, { useState } from "react";
import { motion } from "framer-motion";
import HorizontalScroll from './horizontalscroll';
import { ArrowRight, Check, MessageCircle, Gift, Users, Shield } from 'lucide-react';

const WhatIsEach: React.FC = () => {
  const features = [
    { icon: <Users />, text: "Engaging Social and Professional Profiles" },
    { icon: <Shield />, text: "Bullet-proof Messenger" },
    { icon: <MessageCircle />, text: "Private channels" },
    { icon: <ArrowRight />, text: "Custom Timelines" },
    { icon: <Gift />, text: "Gifting (food, products, money, and App Rewards)" },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12">
        <Horizon />
        <div className="container mx-auto text-center px-4">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            An Honest Super App
          </motion.h2>
          <motion.div 
            className="backdrop-blur-sm bg-black bg-opacity-30 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="text-left mb-8 text-gray-300 leading-relaxed">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-green-400 mr-2">{feature.icon}</span>
                  {feature.text}
                </motion.li>
              ))}
            </ul>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              No Offense, but there are a few archaic networks. Still, there's no full representation. 
              Like here, have a profile picture and short bio!.... Really?
            </motion.p>
            <motion.p 
              className="text-lg mt-4 text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Maybe we should stay 5-10 years in the past - No thank you.
            </motion.p>
            <motion.p 
              className="text-xl mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              TL;DR: It's the perfect link for all those bios. It's a World-in-Bio. ICYMI, don't miss it.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Horizon: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const cards = [
    { content: "Content 1", backContent: "More Info 1" },
    { content: "Content 2", backContent: "More Info 2" },
    { content: "Content 3", backContent: "More Info 3" },
    { content: "Content 4", backContent: "More Info 4" },
    { content: "Content 5", backContent: "More Info 5" },
  ];

  return (
    <div className="Horizon mb-12">
      <HorizontalScroll />
      <div className="horizontal-container">
        <div className="horizontal-section flex space-x-4 p-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card relative w-64 h-64 cursor-pointer transition-transform duration-500 transform ${
                flippedCards.includes(index) ? 'rotate-y-180' : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="card-inner w-full h-full relative">
                <div className="card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
                  {card.content}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white text-xl rotate-y-180">
                  {card.backContent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsEach;