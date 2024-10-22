import React from 'react';
import { motion } from 'framer-motion';
import { MdApps, MdMouse, MdPhoneIphone, MdWeb } from 'react-icons/md';

const services = [
	{
		name: 'Custom Websites',
		description:
			'You are a creative entrepreneur and deserve a great online presence. With experience utilizing the best of what the web has to offer, let me take the guesswork out of where to start by building a custom website tailored to your business needs.',
		icon: MdWeb,
	},
	{
		name: 'Web Application',
		description:
			"Now we're thinking bigger. As a full stack developer, I have the tools and knowledge necessary to bring your next app to life, from client to server and everything in between.",
		icon: MdMouse,
	},
	{
		name: 'Mobile Application',
		description:
			'Your users want to reach you beyond the desktop. With experience in React Native, Kotlin Compose, and Swift, let SPAP Technology craft a mobile experience that your customers will love.',
		icon: MdPhoneIphone,
	},
	{
		name: 'Integrations',
		description:
			'A common pain point for businesses is getting your tech to talk with one another. Specializing in integration technology, I help businesses get the most out of their tech stacks and eliminate redundancy. Get rid of the mundane and get back doing the fun stuff. ',
		icon: MdApps,
	},
];

const ServicesContainer = () => {
	return (
		<motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 lg:w-1/2 lg:p-20 ">
			{services.map((service, idx) => (
				<motion.div
					initial={{ scale: 0.2, opacity: 0.1 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="bg-background-primary p-10 rounded-xl"
					key={idx}>
					<div className="text-5xl lg:text-7xl">
						<service.icon />
					</div>

					<p className="text-2xl lg:text-5xl lg:p-2 font-bold lowercase bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent">
						{service.name}
					</p>
					<p className="text-xs lg:text-lg">{service.description}</p>
				</motion.div>
			))}
		</motion.div>
	);
};

export default ServicesContainer;
