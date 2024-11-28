import React, { useState } from 'react';
import { MdArrowBackIosNew, MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const About_PillarCards = ({ pillars }) => {
	return (
		<ul className="flex justify-between lg:flex-col items-center gap-2 py-8 overflow-hidden lg:w-full">
			{pillars.map((item) => {
				const [isOpen, setIsOpen] = useState(false);
				if (isOpen) {
					return (
						<motion.li
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							onClick={() => setIsOpen(false)}
							className="bg-text-primary/25 text-accent-primary p-2 h-[200px] text-xl rounded-xl min-w-[350px] md:min-w-[500px] order-first lg:order-none"
							key={item.name}>
							<div className="">
								<button onClick={() => setIsOpen(false)}>
									<MdArrowBackIosNew />
								</button>
								<p className="text-2xl underline underline-offset-4">
									{item.name}
								</p>
								<p className="text-text-primary text-lg">{item.description}</p>
							</div>
						</motion.li>
					);
				} else {
					return (
						<li
							onClick={() => setIsOpen(true)}
							className="bg-white/10 text-accent-secondary p-2 h-[200px] w-full text-xl rounded-xl "
							key={item.name}>
							<MdArrowOutward className="ml-auto text-2xl" />
							<div className="h-5/6 flex items-end">
								<p>{item.name}</p>
							</div>
						</li>
					);
				}
			})}
		</ul>
	);
};

export default About_PillarCards;
