import React from 'react';
import { motion } from 'framer-motion';

const About_PillarList = () => {
	return (
		<motion.ul className="flex justify-between lg:flex-col items-center lg:items-start p-4 text-xl lg:text-3xl text-accent-primary lg:gap-8">
			<motion.li
				className="font-semibold drop-shadow-md"
				initial={{ translateX: -100 }}
				animate={{ translateX: 0 }}
				transition={{
					type: 'spring',
					stiffness: 100, // Controls the "tightness" of the spring
					damping: 10, // Reduces oscillation for a smoother spring
					bounce: 0.3, // Adds a bouncy effect
				}}>
				Innovation
			</motion.li>
			<motion.li
				className="font-semibold drop-shadow-md"
				initial={{ translateX: -100 }}
				animate={{ translateX: 0 }}
				transition={{
					type: 'spring',
					stiffness: 120,
					damping: 8,
					bounce: 0.4,
				}}>
				Precision
			</motion.li>
			<motion.li
				className="font-semibold drop-shadow-md"
				initial={{ translateX: -100 }}
				animate={{ translateX: 0 }}
				transition={{
					type: 'spring',
					stiffness: 150,
					damping: 12,
					bounce: 0.5,
				}}>
				Creativity
			</motion.li>
		</motion.ul>
	);
};

export default About_PillarList;
