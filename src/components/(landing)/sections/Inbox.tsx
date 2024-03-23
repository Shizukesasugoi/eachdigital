import React from 'react';

const Inbox = () => {
	return (
		<section className="bg-gradient-to-r from-red-400 to-white">
			<div className="container mx-auto md:flex md:justify-end">
				<div className="md:w-1/2">
					<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-right">
						Inbox
					</h2>
					<p className="text-lg text-gray-600 mb-8 w-full">
						Get messages, texts, and other platform notifications in one spot.
						On top of that, get some storage for your very own EACH email
						address. use it for business, fun, or as a simple backup!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Inbox;
