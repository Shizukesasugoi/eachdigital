import React from 'react';
import { Video } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Visions = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const y3 = useTransform(scrollY, [0, 300], [0, -10]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Takes
        </h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg mb-12">
          <div className="flex items-start mb-6">
            <Video className="w-10 h-10 text-purple-400 mr-4 flex-shrink-0" />
            <p className="text-lg leading-relaxed text-gray-300">
              Vertical videos are trending, but we're taking it further. On EACH:
            </p>
          </div>
          <ul className="space-y-4 ml-14">
            {[
              "Go Live at 200 Followers",
              "Post Videos For Your Age Group",
              "Store Videos in Folders and Your Journal Scrapbook",
              "Launch a Request Response and Earn Points",
              "Repost a Video to the Standard Timeline",
              "Add a Theme Border to Your Videos"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center space-x-4">
          <motion.div style={{ y: y1 }} className="w-1/3 h-40 bg-purple-500 rounded-lg shadow-lg"></motion.div>
          <motion.div style={{ y: y2 }} className="w-1/3 h-40 bg-pink-500 rounded-lg shadow-lg"></motion.div>
          <motion.div style={{ y: y3 }} className="w-1/3 h-40 bg-indigo-500 rounded-lg shadow-lg"></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Visions;