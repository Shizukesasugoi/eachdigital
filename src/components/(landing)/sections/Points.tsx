import React from 'react';
import { Star } from 'lucide-react';



const Points = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Points
        </h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <div className="flex items-start mb-6">
            <Star className="w-10 h-10 text-yellow-400 mr-4 flex-shrink-0" />
            <p className="text-lg leading-relaxed text-gray-300">
              Points are the spirit of EACH. Earn them through various activities and use them for exciting rewards:
            </p>
          </div>
          <div className="ml-14 space-y-4">
            <h3 className="text-xl font-semibold text-purple-300">How to Earn Points:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Daily Log-Ins</li>
              <li>Completing Request challenges</li>
              <li>Posting content</li>
              <li>Daily reward packs</li>
              <li>Talking with friends</li>
              <li>Making themes and stickers</li>
              <li>Frequently updating your profile</li>
              <li>Chatting and more</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-300 mt-6">How to Use Points:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Get themes and stickers</li>
              <li>Unlock expansion packs</li>
              <li>Redeem for IRL rewards</li>
              <li>Send points to friends</li>
              <li>Give them out for request completions</li>
              <li>Share them in other creative ways</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;