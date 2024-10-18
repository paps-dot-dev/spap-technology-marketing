import React, { type FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

interface ProjectDetailsDropdownProps {
	title: string;
	data: string;
	media: string;
}

const ProjectDetailsDropdown: FC<ProjectDetailsDropdownProps> = ({
	title,
	data,
	media,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.button
			onClick={() => setIsOpen(!isOpen)}
			initial={{ translateY: 200, opacity: 0.5 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.4 }}
			className={
				isOpen
					? 'bg-background-primary text-text-primary rounded-xl p-10 w-full lowercase'
					: 'bg-white rounded-xl p-10 w-full lowercase'
			}>
			<div className="flex items-end justify-between text-4xl">
				<motion.p
					initial={{ translateX: -100, opacity: 1 }}
					whileInView={{ translateX: 0, opacity: 1 }}
					className={
						isOpen
							? 'font-semibold bg-gradient-to-r from-accent-primary to-accent-pop  bg-clip-text text-transparent'
							: 'text-background-primary'
					}>
					{title}
				</motion.p>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }} // Rotate 180 degrees when isOpen is true
					transition={{ duration: 0.3 }} // Optional: Add a smooth transition
				>
					<MdArrowDownward />
				</motion.div>
			</div>
			{isOpen && (
				<motion.div>
					<motion.div
						className="bg-accent-secondary h-1 my-1"
						animate={{
							translateX: isOpen ? [-25, 0] : 0,
							opacity: isOpen ? [0, 0.5, , 1] : [0],
						}}></motion.div>
					<motion.p
						className="py-4"
						animate={{
							translateY: isOpen ? [-50, 0] : 0,
							opacity: isOpen ? [0, 1] : [0],
						}}>
						{data}
					</motion.p>
				</motion.div>
			)}
		</motion.button>
	);
};

export default ProjectDetailsDropdown;
