import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
	{
		title: 'UI/UX Design Services',
		description:
			'Create user-friendly, visually appealing designs for web and mobile applications.',
		price: 'Starting at $999',
	},
	{
		title: 'Tech Stack Integrations',
		description:
			'Streamline workflows with seamless integration of tools and platforms.',
		price: 'Starting at $1,499',
	},

	{
		title: 'Custom Websites & Web Apps',
		description:
			'Responsive, high-performance websites and scalable apps tailored to your business.',
		price: 'Starting at $2,499',
	},
	{
		title: 'Startup MVP Development',
		description:
			'Rapid prototyping and development of minimum viable products to validate your business idea.',
		price: 'Contact for Pricing',
	},
	{
		title: 'Database & Cloud Solutions',
		description:
			'Secure and scalable database and cloud architecture for optimal performance.',
		price: 'Contact for Pricing',
	},
	{
		title: 'Tech Strategy & Consulting',
		description:
			'Expert guidance to modernize and scale your tech infrastructure.',
		price: 'Contact for Pricing',
	},
];

const PricingCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + services.length) % services.length
		);
	};

	return (
		<div className="relative">
			{services.map((service, index) => (
				<div
					key={index}
					className={`flex items-center mb-8 ${
						index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
					}`}>
					<div className="w-2/3 py-10 md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
						<h2 className="text-xl font-bold text-gray-800 mb-4">
							{service.title}
						</h2>
						<p className="text-gray-600">{service.description}</p>
						<p className="mt-4 text-lg font-bold text-accent-secondary">
							{service.price}
						</p>
					</div>
					<div className="w-1/2 h-2 bg-accent-secondary mx-4"></div>
				</div>
			))}
		</div>
	);
};

export default PricingCarousel;
