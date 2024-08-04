import Image from "next/image";
import React from "react";

const ChatBoxes = () => {
  return (
    <section className="bg-primary-100 py-16 relative">
    <div className="container mx-auto relative z-10">
    <section className="bg-gradient-to-r from-cyan-200 to-red-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-right">
          Quick Chats and Diverse Channels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <Image
             sizes="100vw"
             style={{
               width: '100%',
               height: 'auto',
             }}
             width={500}
             height={300}
              src="/images/chat/chat.png"
              alt="Chat Screen 1"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Share Your Own Private Chat with Your Friends and share your latest updates, thoughts, content, and more.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <Image
             sizes="100vw"
             style={{
               width: '100%',
               height: 'auto',
             }}
             width={500}
             height={300}
              src="/images/chat/messenger.png"
              alt="Chat Screen 2"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Stay connected with your loved ones wherever you are.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <Image
             sizes="100vw"
             style={{
               width: '100%',
               height: 'auto',
             }}
             width={500}
             height={300}
              src="/images/chat/5.png"
              alt="Chat Screen 3"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Share moments and experiences in real-time.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <Image
             sizes="100vw"
             style={{
               width: '100%',
               height: 'auto',
             }}
             width={500}
             height={300}
              src="/images/chat/6.png"
              alt="Chat Screen 4"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-600">
                Collaborate with your peers and other like you and discuss all sorts of projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 opacity-25 blur-xl pointer-events-none"/>
    </section>
  );
};

export default ChatBoxes;
