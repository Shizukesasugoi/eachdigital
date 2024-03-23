import React from "react";

const GetTheContentYouNeed = () => {
  return (
    <section className="bg-gradient-to-r from-red-400 to-white">
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">A messenger so good it might just have to be your go-to</h2>
        <div className="flex flex-col md:flex-row">
          <div className=" pr-8">
            <p className="text-lg text-gray-600">
              We&apos;re a friendly network here and the 
              perfect Link-in-Bio everyyywhere else.<br/>
              Hide messages threads. Require a passcode to view threads, ask to share a
              message to your personal chat channel/individual groupchat. Temporarily
              pin messages and select different messages to be able to group them. Make a mindmap 
              from messages.<br/> Make requests posted on the timeline from a message.
              Use a read out option to hear messages.
              hear messages, and Send disappearing
              text & other forms of messages.<br/> Add a
              message to a Journal type page to keep
              track of it on that day, also add any other
              type of content on the platform. Highlight a
              message, add themes to messages, and
              Show a snapshot alert &quot;This user has
              screenshot updates on&quot; - to increase
              privacy. <br/> Make a new
              table from a message and request to add
              a boxed version of a message to your
              profile which looks more like a widget.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* You can include an image here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheContentYouNeed;
