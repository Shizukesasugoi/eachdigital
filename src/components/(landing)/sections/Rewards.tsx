import React from 'react';
import { Gift, Trophy, Users } from 'lucide-react';

const Rewards = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Rewards
        </h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            EACH is filled with rewards. Discover the exciting possibilities:
          </p>
          <div className="space-y-8">
            <RewardSection
              icon={<Gift className="w-8 h-8 text-green-400" />}
              title="Profile and Content Rewards"
              description="Earn rewards for your profile updates, messages, and posts."
            />
            <RewardSection
              icon={<Trophy className="w-8 h-8 text-yellow-400" />}
              title="Each Talent Show"
              description="Rank high in the annual Each Talent Show for surprise rewards!"
            />
            <RewardSection
              icon={<Users className="w-8 h-8 text-blue-400" />}
              title="Team Competitions"
              description="Join a team during sign-up. The team with the most points at year-end gets special rewards for the entire following year."
            />
          </div>
          <div className="mt-8 p-4 bg-purple-900 bg-opacity-30 rounded-lg">
            <p className="text-purple-300 font-semibold">
              Don't miss out on IRL items, cash rewards, coupons, and more exciting possibilities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RewardSection = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-4 flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default Rewards;