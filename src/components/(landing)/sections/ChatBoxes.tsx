import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChatBoxes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <ChevronLeft className="text-white w-8 h-8" />,
    nextArrow: <ChevronRight className="text-white w-8 h-8" />,
  };

  const chatItems = [
    {
      image: "/images/chat/chat.png",
      alt: "Chat Screen 1",
      text: "Share Your Own Private Chat with Your Friends and share your latest updates, thoughts, content, and more.",
    },
    {
      image: "/images/chat/messenger.png",
      alt: "Chat Screen 2",
      text: "Stay connected with your loved ones wherever you are.",
    },
    {
      image: "/images/chat/5.png",
      alt: "Chat Screen 3",
      text: "Share moments and experiences in real-time.",
    },
    {
      image: "/images/chat/6.png",
      alt: "Chat Screen 4",
      text: "Collaborate with your peers and other like you and discuss all sorts of projects.",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stay Chatting
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Slider {...settings} className="chat-carousel">
            {chatItems.map((item, index) => (
              <div key={index} className="px-2">
                <motion.div 
                  className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-lg text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default ChatBoxes;