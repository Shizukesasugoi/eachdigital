import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const videoData = [
  {
    id: "video1",
    title: "Enhance Your Video Experience",
    description: "Add themes, pin channels, handle requests, and submit for EACH TV.",
    videoUrl: "https://www.youtube.com/embed/your-video-url-1", // Replace with your video URL
  },
  // Add more video data here if needed
];

const Videos = () => {
  const [expandedImage, setExpandedImage] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Videos
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {videoData.map((video) => (
              <div key={video.id} className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Play className="w-16 h-16 text-white opacity-75" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-300">{video.title}</h3>
                  <p className="text-gray-400">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <div 
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setExpandedImage(true)}
            >
              <img src="/api/placeholder/600/400" alt="Expandable image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {expandedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full">
              <img src="/api/placeholder/1200/800" alt="Expanded image" className="w-full h-auto" />
              <button 
                className="absolute top-4 right-4 text-white"
                onClick={() => setExpandedImage(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;