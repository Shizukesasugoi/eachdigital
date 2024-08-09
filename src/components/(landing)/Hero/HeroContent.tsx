import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";

interface Props {
  title: string;
  description: string;
};

const HeroContent: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <section className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="fixed right-10 top-24 space-y-4 z-20">
          {Array.from({ length: 8 }, (_, i) => (
            <a
              key={i}
              href={`#section${i + 1}`}
              className="block px-14 py-6 text-white bg-blue-700 bg-opacity-10 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 ease-in-out"
            >
              Section {i + 1}
            </a>
          ))}
        </div>
        <div className="relative py-16 px-4 mx-auto max-w-screen-xl text-center z-10">
          <div className="absolute inset-0 bg-white opacity-5 blur-3xl rounded-full"></div>
          <div className="relative backdrop-blur-sm bg-black bg-opacity-30 p-8 rounded-2xl shadow-2xl">
            <motion.h1
              className="mb-4 text-5xl xl:text-8xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-white-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <motion.a
                href="https://each.digital"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-gradient-to-r from-red-7000 to-red-800 hover:from-red-600 hover:to-red-700 focus:ring-4 focus:ring-red-300 shadow-lg transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Expand Forever
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <IconBrandGithub className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <IconBrandGoogle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <IconBrandOnlyfans className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <motion.form
                className="mt-8 p-6 max-w-sm mx-auto bg-gray-900 bg-opacity-80 rounded-lg shadow-lg space-y-4 text-left flames-background"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    className="block w-full mt-1 p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    className="block w-full mt-1 p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Share your dream with us if you'd like!</label>
                  <textarea
                    className="block w-full mt-1 p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
                    placeholder="Tell us your dream..."
                    rows={4}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 px-5 text-base font-medium text-white rounded-lg bg-gradient-to-r from-grey-700 to-grey-800 hover:from-red-600 hover:to-red-700 focus:ring-4 focus:ring-red-300 shadow-lg transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Beta Waitlist
                </motion.button>
              </motion.form>
              <motion.div
                className="mt-8 p-6 max-w-sm mx-auto bg-gray-900 bg-opacity-80 rounded-lg shadow-lg text-center flames-background"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContent;
