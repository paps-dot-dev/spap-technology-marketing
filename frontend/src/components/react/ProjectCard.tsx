import React, { type FC } from 'react';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
	MdArrowDownward,
	MdArrowForward,
	MdArrowRight,
	MdClose,
} from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';

interface ProjectCardProps {
	project: object;
	key: Int16Array;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="lowercase flex flex-col items-center lg:p-20">
			<motion.div
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
				onTap={() => setHovered(true)}
				initial={{ opacity: 0.1, scale: 0.2 }}
				whileInView={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, z: 10, scale: 0.5 }}
				transition={{ delay: 0.1, stiffness: 0.2 }}
				className="card base-400 w-96 max-h-[500px] lg:w-full shadow-xl z-10 relative rounded-xl">
				<img
					className="p-10 z-10 object-cover w-full h-full"
					src={
						project.thumbnail_url
							? project.thumbnail_url
							: 'https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/SPAP%20Logos/Icon/PNG/Black_Icon%20Lockup_SPAP.png'
					}
				/>
				{hovered && (
					<motion.div
						animate={{
							opacity: hovered ? [0, 0.5, , 1] : [1, 0],
						}}
						transition={{ duration: 0.5 }}
						className="absolute top-0 h-full w-full bg-black/90 z-20 flex justify-center items-center flex-col rounded-xl gap-4">
						<button
							onClick={() => setHovered(false)}
							className="text-3xl text-accent-primary absolute p-4 top-5 right-5 hover:scale-125 ease-linear duration-100 hover:text-accent-pop z-40">
							<MdClose onClick={() => setHovered(false)} />
						</button>
						<motion.p
							initial={{ translateX: -100, opacity: 0 }}
							whileInView={{ translateX: 0, opacity: 1 }}
							transition={{ duration: 0.2 }}
							className="text-4xl text-text-primary font-bold">
							View Project
						</motion.p>
						<motion.a
							href={`/projects/${project.project_name}`}
							initial={{ scale: 0.5, opacity: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							whileTap={{ scale: 1.2 }}
							className=" text-5xl px-16 border-text-primary border-2 rounded-full text-accent-primary hover:text-accent-pop group hover:border-accent-pop">
							<MdArrowForward className="group-hover:translate-x-16 duration-200 ease-linear" />
						</motion.a>
					</motion.div>
				)}
			</motion.div>
			<div className="px-2 py-4">
				<p className="font-semibold text-background-primary text-xl lg:text-4xl">
					{project.project_name}
				</p>
				<p className="text-xs font-extralight">{project.project_details}</p>
				<div className="flex items-center py-1">
					{project.tags?.map((tag) => (
						<p
							className={`bg-accent-primary text-text-primary rounded-full p-1 w-20 text-center text-xs`}>
							{tag}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
