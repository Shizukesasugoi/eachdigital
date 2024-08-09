import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const profiles = [
  { id: 'profile1', imageUrl: '/images/profile/1.png' },
  { id: 'profile2', imageUrl: '/images/profile/2.png' },
  { id: 'profile3', imageUrl: '/images/profile/3.png' },
  { id: 'profile4', imageUrl: '/images/profile/4.png' },
  { id: 'profile5', imageUrl: '/images/profile/5.png' },
  { id: 'profile6', imageUrl: '/images/profile/6.png' },
];

const videoUrl = '/videos/extraordinary.mp4';
const imageWidth = 185;
const imageHeight = 310;

const AutoScrollText = ({ textLines }) => {
  const [isScrolling, setIsScrolling] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (isScrolling) {
      controls.start({
        x: [0, -2000],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isScrolling, controls]);

  return (
    <motion.div 
      className="backdrop-blur-md bg-white bg-opacity-10 rounded-lg shadow-lg p-8 mb-12 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsScrolling(false)}
      onMouseLeave={() => setIsScrolling(true)}
    >
      <motion.div animate={controls} className="py-8">
        <div className="flex space-x-16">
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              className="text-2xl font-semibold whitespace-nowrap"
              style={{ color: `hsl(${index * 30}, 70%, 50%)` }}
              whileHover={{ scale: 1.05, color: "#fbbf24" }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExtraordinaryProfiles = () => {
  const socialTextLines = [
    "4 Slides. One Full Profile. All Standard Posts Below.",
    "Customizable Screens for All Your Links and Content.",
    "Your Full Timeline of Posts Below",
    "Space For Our Extensions and Expansion Packs.",
    "Let Anyone Interact and Get To Know You.",
    "The Possibilities are Endless.",
    "Obtain subscribers and Donations.",
    "Private Profiles.",
    "Get a Feed of Random Profiles To Scroll Through.",
  ];

  const servicesTextLines = [
    "Unified Inbox",
    "Send Anything to a Friend",
    "Find Instructional Videos & Courses",
    "Find Healthcare",
    "Enjoy Mini-apps",
    "See Detailed News",
    "Workshop and Manage with a Group",
    "Pay and Manage Payments",
    "Study, Read, Journal",
    "Apply for Grants",
    "Get an Email Address",
    "Launch a Full Website",
    "Launch Your Own Each-Templated Social Network",
    "Post Your Music",
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a1a2e] via-black to-[#1a1a2e] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl text-white">A Social Platform</h3>
          <h3 className="text-xl text-white">A Service Platform</h3>
        </div>
        <h3 className="text-2xl text-white text-center mb-8">Where Two World's Collide</h3>

        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <motion.h2 
            className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            EACH
          </motion.h2>
          <motion.div
            className="w-32 h-32 bg-gray-700 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/images/placeholder-image.jpg"
              alt="Placeholder"
              width={128}
              height={128}
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.h3
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Needs Noticed
        </motion.h3>
        
        <motion.h3
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Social
        </motion.h3>
        <AutoScrollText textLines={socialTextLines} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {profiles.map((profile, index) => (
            <motion.div 
              key={profile.id} 
              className="image-container backdrop-blur-sm bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={profile.imageUrl}
                alt="profile"
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="backdrop-blur-sm bg-white bg-opacity-10 rounded-lg shadow-lg mb-12 p-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <video controls className="w-full rounded-lg" src={videoUrl}>
            <track
              src={"./captions"}
              kind="captions"
              srcLang="en"
              label="English captions"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.h3
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services at Your Fingertips
        </motion.h3>
        <AutoScrollText textLines={servicesTextLines} />

        <div className="grid grid-cols-3 gap-4 justify-center mb-12">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-4 aspect-square"
              style={{ width: '200px', height: '200px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-2">Content Card {item}</h4>
              <p className="text-sm text-gray-300">This is a small content card. You can add any relevant information or features here.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraordinaryProfiles;