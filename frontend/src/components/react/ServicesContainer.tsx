import React from 'react';
import { motion } from 'framer-motion';
import {MdApps, MdCode, MdEmail, MdMouse, MdOutlineMusicNote, MdPhoneIphone, MdWeb} from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { Button } from '../ui/button';

const services = [
	{
		name: 'Websites & Apps',
		description: 'With over 6 years of experience as a full stack developer, I build content-driven, high-impact websites that will help your brand dominate online presence.',
		icon: MdCode,
	},
	{
		name: 'Pro Audio',
		description:
			'From producing your next single to setting up backing tracks for your live show, I bring more than a decade of recording experience to your next project',
		icon: MdOutlineMusicNote,
	},

	{
		name: 'Online Marketing',
		description: 'Passionate about helping creatives build their outreach, I provide consultation on the latest and greatest tools to do just that.',
		icon: MdEmail,
	},
	{
		name: 'Copywriting',
		description: 'Communicate to your audience effectively with authentic, genuine copy.',
		icon: FaPencilAlt,
	},
];

const ServicesContainer = () => {
	return (
		<motion.div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
			{services.map((service, idx) => (
				<motion.div
					initial={{ scale: 0.2, opacity: 0.1 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="bg-primary p-10 rounded-xl w-96 h-[500px] flex flex-col justify-center"
					key={idx}>
					<div className="text-5xl md:text-5xl">
						<service.icon />
					</div>

					<p className="text-4xl md:text-5xl lg:py-2 font-bold lowercase bg-gradient-to-r from-accent-purple to-accent-magenta bg-clip-text text-transparent">
						{service.name}
					</p>
					<p className="text-lg">{service.description}</p>
					<a className="border-accent-magenta border-2  rounded-md block w-full text-center mt-4" href="/contact">
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
