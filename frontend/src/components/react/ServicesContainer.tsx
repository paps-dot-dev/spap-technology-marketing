import React from 'react';
import { motion } from 'framer-motion';
import { MdApps, MdMouse, MdPhoneIphone, MdWeb } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { Button } from '../ui/button';

const services = [
	{
		name: 'Custom Websites',
		description:
			'When it comes to custom websites, I go beyond templates to build something truly unique for your brand. Whether you’re a creative, musician, or entrepreneur, I design high-impact websites tailored specifically to your goals. From clean, modern layouts to smart integrations, I create seamless experiences that not only look great but work flawlessly across all devices. My mission is to help you scale your outreach and stand out in your industry. Let’s work together to bring your vision to life with a website that captures your essence and drives real growth.',
		icon: MdWeb,
	},
	{
		name: 'Web Applications',
		description:
			'With years of experience as a full-stack developer, I specialize in building powerful, high-performance web applications tailored to your specific needs. From sleek front-end designs to robust back-end systems, I handle every aspect to create seamless, responsive apps that scale with your business. Whether you’re looking to streamline operations, engage users in new ways, or bring an innovative idea to life, I’m here to make it happen. Let’s collaborate to build a web app that not only meets your goals but also drives real impact for your business.',
		icon: MdMouse,
	},

	{
		name: 'Integrations',
		description:
			'I specialize in building custom integrations that connect the tools, platforms, and apps you rely on, creating a seamless digital ecosystem tailored to your workflow. Whether you need to sync data between systems, automate processes, or enhance functionality, I bring together all the pieces to work as one cohesive unit. With my experience in full-stack development, I make sure your integrations are robust, reliable, and designed to scale with your business. Let’s simplify your tech stack and unlock new efficiencies that save you time and resources.',
		icon: MdApps,
	},
	{
		name: 'Copywriting',
		description:
			'We know that impactful words are essential to building connections and driving results. My copywriting service is designed to capture your unique voice and communicate your brand’s story authentically. Whether you’re launching a website, email campaign, or product, I create compelling, clear, and conversion-focused copy that speaks directly to your audience. With my expertise, you’ll get content that not only enhances your brand but resonates with your readers and turns browsers into loyal fans. Let’s bring your vision to life with words that work.',
		icon: FaPencilAlt,
	},
];

const ServicesContainer = () => {
	return (
		<motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 lg:w-3/4 lg:p-20 ">
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

					<p className="text-2xl lg:text-5xl lg:py-2 font-bold lowercase bg-gradient-to-r from-accent-primary to-accent-pop bg-clip-text text-transparent">
						{service.name}
					</p>
					<p className="text-xs lg:text-lg">{service.description}</p>
					<a className="ml-auto block w-fit mt-4" href="/contact">
						<Button size="lg" className="bg-accent-pop">
							I need this service
						</Button>
					</a>
				</motion.div>
			))}
		</motion.div>
	);
};

export default ServicesContainer;
