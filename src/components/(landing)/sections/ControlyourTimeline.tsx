import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ControlYourTimeline = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-black to-blue-900 py-16 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 text-right text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Control Your Timeline
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300} 
              src="/images/timeline/1.png"
              alt="Timeline Image"
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="backdrop-blur-sm bg-black bg-opacity-30 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                Endless EACH. <br/> Design your network and arrange feeds intuitively. Choose your priorities on your sidebars.<br/> Join a social landscape that chases the convenience of
                your browser. Easy and quick access to your messages and multiple content
                forms. You can always select what you do and don't want to
                see at a given time. Not in the mood to come across photos? No
                problem. Want to see photos only? Of course!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
};

export default ControlYourTimeline;