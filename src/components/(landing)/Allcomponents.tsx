"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Importing components from sections
import WhatIsEach from "./sections/WhatisEach";
import AServicePlatform from "./sections/AServicePlatform";
import Adventures from "./sections/Adventures";
import AlgorithmPower from "./sections/AlgorithmPower";
import ChatBoxes from "./sections/ChatBoxes";
import ControlyourTimeline from "./sections/ControlyourTimeline";
import Data from "./sections/Data";
import EachforBusiness from "./sections/EachforBusiness";
import EachforKids from "./sections/EachforKids";
import ExpansionPacks from "./sections/ExpansionPacks";
import ExtraordinaryProfiles from "./sections/ExtraordinaryProfiles";
import Games from "./sections/Games";
import GettheContentyouNeed from "./sections/GettheContentyouNeed";
import ItsMoreThenYouThink from "./sections/ItsMoreThen";
import Notes from "./sections/Notes";
import Performances from "./sections/Performances";
import Points from "./sections/Points";
import Requests from "./sections/Requests";
import Rewards from "./sections/Rewards";
import Stickers from "./sections/Stickers";
import Videos from "./sections/Videos";
import Visions from "./sections/Visions";
import Inbox from "./sections/Inbox";

const AnimatedSection = ({ children, animation }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start(animation);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, animation]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const AllComponents = () => {
  return (
    <div>
      <AnimatedSection animation={fadeInUp}>
        <WhatIsEach />
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <ExtraordinaryProfiles />
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <Notes />
      </AnimatedSection>

      <AnimatedSection animation={fadeInUp}>
        <ExpansionPacks />
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <ControlyourTimeline />
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <GettheContentyouNeed />
      </AnimatedSection>

      <AnimatedSection animation={fadeInUp}>
        <ChatBoxes />
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <Visions />
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <Videos />
      </AnimatedSection>

      <AnimatedSection animation={fadeInUp}>
        <Points />
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <Rewards />
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <Requests />
      </AnimatedSection>

      <AnimatedSection animation={fadeInUp}>
        <Inbox />
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <AlgorithmPower />
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <Performances />
      </AnimatedSection>

      <AnimatedSection animation={fadeInUp}>
        <Games />
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <AServicePlatform />
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <EachforKids />
      </AnimatedSection>

      <AnimatedSection animation={fadeInUp}>
        <EachforBusiness />
      </AnimatedSection>
    </div>
  );
};

export default AllComponents;