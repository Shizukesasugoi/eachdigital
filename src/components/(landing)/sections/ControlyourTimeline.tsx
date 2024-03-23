import Image from "next/image";
import React from "react";

const ControlYourTimeline = () => {
  return (
    <section className="bg-gradient-to-r from-red-400 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-right">
          Control Your Timeline
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
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
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 pl-8">
            <p className="text-lg text-gray-600 text-left">
              Endless EACH. <br/> Design your network and arrange feeds intuitively. Choose your priorities on your sidebars.<br/> Join a social landscape that chases the convenience of
              your browser. Easy and quick access to your messages and multiple content
              forms. You can always select what you do and don&apos;t want to
              see at a given time. Not in the mood to come across photos? No
              problem. Want to see photos only? Of course!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlYourTimeline;
