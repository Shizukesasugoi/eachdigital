import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PresentationChartLineIcon, HeartIcon, ChatBubbleLeftIcon, VideoCameraIcon, CalendarIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const Notes = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { name: "Be Gifted/Gift Directly Posts", icon: HeartIcon },
    { name: "Go Live in Response", icon: VideoCameraIcon },
    { name: "Reward Points", icon: PresentationChartLineIcon },
    { name: "Add Posts to Your Journal", icon: CalendarIcon },
    { name: "Repost With a Positive or Dislike Sentiment", icon: ChatBubbleLeftIcon },
    { name: "Raise up in Support", icon: HeartIcon },
    { name: "Add To Story", icon: VideoCameraIcon },
    { name: "Post an Attached Video Reply", icon: VideoCameraIcon },
    { name: "Add on Your Profile Screens", icon: UserGroupIcon },
    { name: "Set a Reminder of It", icon: CalendarIcon },
    { name: "Start a Chatbox With it", icon: ChatBubbleLeftIcon },
    { name: "Turn It Into a request challenge", icon: UserGroupIcon },
    { name: "Focus it for a group call", icon: VideoCameraIcon },
    { name: "Premium users can have their own theme shown above Timeline posts", icon: PresentationChartLineIcon },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-black min-h-screen">
      <div className="md:w-1/2 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-white">Our Bolstered Timeline</h2>
        <p className="mb-4 text-white">Hit the menu button to see our special options</p>
        <div className="grid grid-cols-3 gap-4 flex-grow overflow-auto">
          {features.map((feature, index) => (
            <button
              key={index}
              className="bg-blue-200 hover:bg-purple-200 rounded-lg p-4 flex flex-col items-center"
              onClick={() => setSelectedFeature(feature)}
            >
              <feature.icon className="h-8 w-8 text-black mb-2" />
              <span className="text-sm font-medium text-center">{feature.name}</span>
            </button>
          ))}
        </div>
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-blue-900 shadow-lg rounded-lg p-6 mt-4"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{selectedFeature.name}</h3>
              <p className="mb-4 text-gray-300">This feature allows you to enhance your timeline experience.</p>
              <button
                className="bg-purple-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-black"
                onClick={() => setSelectedFeature(null)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="md:w-1/2 bg-gradient-to-br from-red-900 via-black to-purple-900 p-6 flex flex-col">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expansion Packs
        </motion.h2>
        <motion.div
          className="backdrop-blur-sm bg-black bg-opacity-30 rounded-lg p-8 shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-white leading-relaxed">
            There are Many Ways to Elevate your Profile. We Won't List Them All, but We Guarantee You Won't Go without A Need. We Aim To surpass What You'd Standardly have With a Website.
          </p>
        </motion.div>
        <ExpansionPacks />
      </div>
    </div>
  );
};

const ExpansionPacks = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const boxes = [
    { id: 1, title: "Pack 1", content: "Content for Pack 1" },
    { id: 2, title: "Pack 2", content: "Content for Pack 2" },
    { id: 3, title: "Pack 3", content: "Content for Pack 3" },
    { id: 4, title: "Pack 4", content: "Content for Pack 4" },
    { id: 5, title: "Pack 5", content: "Content for Pack 5" },
    { id: 6, title: "Pack 6", content: "Content for Pack 6" },
  ];

  const toggleBox = (id) => {
    setExpandedBox(expandedBox === id ? null : id);
  };

  return (
    <div className="grid grid-cols-2 gap-4 flex-grow overflow-auto">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className={`bg-blue-900 rounded-lg p-4 cursor-pointer ${
            expandedBox === box.id ? "col-span-2 row-span-2" : ""
          }`}
          layout
          onClick={() => toggleBox(box.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">{box.title}</h3>
          <AnimatePresence>
            {expandedBox === box.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300">{box.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Notes;