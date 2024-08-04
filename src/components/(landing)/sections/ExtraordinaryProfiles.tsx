import Image from 'next/image';
import React from 'react';

  const profiles = [
	{
	  id: 'profile1',
	  imageUrl: '/images/profile/1.png',
	},
	{
	  id: 'profile2',
	  imageUrl: '/images/profile/2.png',
	},
	{
	  id: 'profile3',
	  imageUrl: '/images/profile/3.png',
	},
	{
	  id: 'profile4',
	  imageUrl: '/images/profile/4.png',
	},
	{
	  id: 'profile5',
	  imageUrl: '/images/profile/5.png',
	},
	{
	  id: 'profile6',
	  imageUrl: '/images/profile/6.png',
	},
  ];
  
  const videoUrl = '/videos/extraordinary.mp4';
  const imageWidth = 370;
  const imageHeight = 620;
  
  const ExtraordinaryProfiles = () => {
	return (
	  <section className="bg-gradient-to-r from-cyan-200 to-red-100 py-16">
		<style>
		  {`
			.responsive-div {
			  max-width: 900px;
			  width: 100%;
			  padding: 16px;
			  display: flex;
			  flex-direction: column;
			  justify-content: center;
			  margin: 50px auto;
			}
  
			.responsive-video {
			  width: 100%;
			  height: auto;
			  border-radius: 0.5rem; /* Add border radius for better aesthetics */
			}
  
			.image-container {
			  margin-bottom: 16px; /* Add margin-bottom for spacing */
			}
		  `}
		</style>
		<div className="container mx-auto text-center">
		  <h2 className="text-4xl font-extrabold mb-8">
			Goodbye Outdated Profiles. Our Needs Have Changed.
		  </h2>
		  <p className="text-lg mb-8 text-center">
			4 Screens of Your Content, Right, Left, Down, and Up, Come Together to form One Full
			Display Ready For All of Your Links, Content, and However You&apos;d
			Like To Express Yourself. You&apos;ll Also Have Your Full Timeline of Posts Below and
			Space For Our Extensions and Expansion Packs That You Choose. Users Can View More of Your Profile in Any Direction. Show Everything You Got 
			and Leave the Perfect Spot For Your Friends, Business Partners, and
			Supporters to Interact and Get To Know You. The Possibilities are
			Endless. Obtain subscribers, and, make your profile private if you
			please. To see and get Inspired by all of the profiles out there,
			users easily are set to get a feed of profiles that they can scroll through and check
			out. Who knows, maybe you&apos;ll find someone new to support solely
			off of their style.
		  </p>
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{profiles.map((profile) => (
			  <div key={profile.id} className="image-container">
				<Image
				  src={profile.imageUrl}
				  alt="profile"
				  width={imageWidth}
				  height={imageHeight}
				  className="w-full h-full rounded-lg"
				/>
			  </div>
			))}
		  </div>
		  <div className="bg-white rounded-lg shadow-md responsive-div mt-8">
			<video controls className="responsive-video" src={videoUrl}>
			  <track
				src={"./captions"}
				kind="captions"
				srcLang="en"
				label="English captions"
			  />
			  Your browser does not support the video tag.
			</video>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default ExtraordinaryProfiles;