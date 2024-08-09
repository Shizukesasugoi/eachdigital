import React from "react";
import HeroContent from "./HeroContent";


const Hero = () => {
  const digitalContent = {
    title: "EACH",
    description:
      "The new heavy-hitting network. Powered by a suite of features unrivaled (honestly)."
  };

  return ( 
    <div className="w-full h-screen bg-cover bg-center">
      <HeroContent title={digitalContent.title} description={digitalContent.description} />
    </div>
    
  );
};

export default Hero;
