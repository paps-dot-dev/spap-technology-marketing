import React from 'react';
import { motion } from 'framer-motion';
import {
	MdApps,
	MdCloud,
	MdCode,
	MdDataObject,
	MdEmail,
	MdMouse,
	MdOutlineMusicNote,
	MdPhoneIphone,
	MdScience,
	MdWeb,
} from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { Button } from '../ui/button';
import { isTemplateExpression } from 'typescript';

const services = [
	{
		name: 'Custom Websites + Web Apps',
		description:
			'Build responsive, high-performance websites and scalable web applications tailored to your business goals.',
		icon: MdWeb,
	},
	{
		name: 'Tech Stack Integrations',
		description:
			'Connect and optimize tools, platforms, and APIs to streamline workflows and boost efficiency.',
		icon: MdCode,
	},
	{
		name: 'Database + Cloud Solutions',
		description:
			'Design, implement, and manage secure databases and cloud architectures for scalable, reliable performance.',
		icon: MdCloud,
	},

	{
		name: 'Tech Strategy + Consulting',
		description:
			'Audit, plan, and implement modern tech solutions to help your business scale and succeed.',
		icon: MdScience,
	},
];

const ServicesContainer = () => {
	return (
		<motion.div className="flex  flex-col lg:flex-row items-center justify-center gap-4 mx-auto p-4 flex-shrink">
			{services.map((service, idx) => (
				<motion.div
					initial={{ scale: 0.2, opacity: 0.1 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="bg-background/100 p-5 rounded-xl w-84 md:w-96 lg:w-[600px] h-[400px] md:h-[500px] flex flex-col justify-center"
					key={idx}>
					<div className="mb-4">
						<div className="text-4xl md:text-5xl text-accent-secondary">
							<service.icon />
						</div>

						<p className="text-4xl md:text-5xl lg:py-2 font-bold lowercase bg-gradient-to-r from-accent-secondary to-background via-text-primary bg-clip-text text-transparent">
							{service.name}
						</p>
						<p className="text-lg text-text-primary font-extralight py-2">
							{service.description}
						</p>
					</div>
					<a
						className="py-4 bg-accent-secondary text-text-primary w-fit px-2 text-center ml-auto rounded-lg hover:bg-background hover:border-2 hover:border-accent-secondary transition-all"
						href="/projects/web">
						Read related case studies
					</a>
				</motion.div>
			))}
		</motion.div>
	);
};

export default ServicesContainer;
