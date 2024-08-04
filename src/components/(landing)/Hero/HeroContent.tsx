// "use client"
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";

// const HeroContent = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       classNameName="flex flex-col items-center justify-center h-screen"
//     >
//       <motion.div
//         variants={slideInFromTop}
//         classNameName="text-center text-8xl font-bold text-primary-100"
//       >
//         <span>
//           Welcome To
//           <span classNameName="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500">
//             {" "}
//             Each{" "}
//           </span>
//         </span>
//       </motion.div>

//       <motion.p variants={slideInFromTop} classNameName="mt-6 mb-6 text-xl text-primary-100/70 text-center">
//         Join our next-generation social media platform and immerse yourself in
//         a cyberpunk-inspired digital world. Connect with friends, explore
//         futuristic cityscapes, and experience a new era of social networking.
//       </motion.p>

//       <motion.div
//         variants={slideInFromRight(1)}
//         classNameName="flex  items-center justify-center gap-5 "
//       >
//         <motion.a
//           variants={slideInFromLeft(1)}
//           href="/signup"
//           classNameName="p-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-center text-white cursor-pointer rounded-lg max-w-[400px] w-full h-auto"
//         >
//           Get Started
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HeroContent;

"use client";
import React from "react";
import { Label } from '@/components/ui/label';
import  Input  from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

type Props = {
	title: string;
	description: string;
};

const HeroContent = (props: Props) => {
	return (
    <section className="flex justify-center items-center mt-16 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl xl:text-8xl sm:text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-black">
          {props.title}
        </h1>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="each.digital"
            className="flex-grow inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-500 to-primary hover:opacity-70 focus:ring-4 focus:ring-primary-500 shadow-md"
          >
            >
          </a>
          <a
            href="each.digital"
            className="flex-grow inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-300/70 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow-md">
          
            The Need to Know
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            />
              <path
                d="M7 10L12 15L17 10"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
        
          
        </div>
     </div>
    </section>
  );
};

export default HeroContent; 
