import React from "react";
import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Share } from 'lucide-react';

const GetTheContentYouNeed = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-black to-indigo-900 py-16 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A messenger so good it might just have to be your go-to
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start">
          <motion.div 
            className="md:w-2/3 pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="backdrop-blur-sm bg-black bg-opacity-30 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                We're a friendly network here and the 
                perfect Link-in-Bio everyyywhere else.<br/><br/>
                Hide messages threads. Require a passcode to view threads, ask to share a
                message to your personal chat channel/individual groupchat. Temporarily
                pin messages and select different messages to be able to group them. Make a mindmap 
                from messages.<br/><br/> Make requests posted on the timeline from a message.
                Use a read out option to hear messages.
                hear messages, and Send disappearing
                text & other forms of messages.<br/><br/> Add a
                message to a Journal type page to keep
                track of it on that day, also add any other
                type of content on the platform. Highlight a
                message, add themes to messages, and
                Show a snapshot alert "This user has
                screenshot updates on" - to increase
                privacy. <br/><br/> Make a new
                table from a message and request to add
                a boxed version of a message to your
                profile which looks more like a widget.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/3 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* TikTok-style video player mockup */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-xl w-full max-w-[340px] mx-auto">
              <div className="relative pb-[177.77%]"> {/* 16:9 aspect ratio */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex items-end">
                  <img src="/api/placeholder/340/600" alt="TikTok video placeholder" className="w-full h-full object-cover absolute inset-0" />
                  <div className="p-4 relative z-10 w-full">
                    <p className="text-white font-semibold mb-2">@username</p>
                    <p className="text-white text-sm mb-4">Video description goes here #hashtag #viral</p>
                    <div className="flex justify-between items-center">
                      <Play className="text-white w-8 h-8" />
                      <div className="flex space-x-4">
                        <div className="flex flex-col items-center">
                          <Heart className="text-white w-6 h-6 mb-1" />
                          <span className="text-white text-xs">123K</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <MessageCircle className="text-white w-6 h-6 mb-1" />
                          <span className="text-white text-xs">456</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Share className="text-white w-6 h-6 mb-1" />
                          <span className="text-white text-xs">789</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-900 to-transparent"></div>
    </section>
  );
};

export default GetTheContentYouNeed;