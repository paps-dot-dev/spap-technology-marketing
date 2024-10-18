import React from 'react';
import { motion } from 'framer-motion';
import ProjectDetailsDropdown from './ProjectDetailsDropdown';

const ProjectDetails = ({ data }) => {
	return (
		<div className="text-background-primary lowercase space-y-4">
			<ProjectDetailsDropdown
				title={'The Problem'}
				data={'some problem will be listed here'}
				media=""
			/>
			<ProjectDetailsDropdown
				title={'The Process'}
				data={'some problem will be listed here'}
				media=""
			/>
			<ProjectDetailsDropdown
				title={'The Solution'}
				data={'some problem will be listed here'}
				media=""
			/>
			<ProjectDetailsDropdown
				title={'The tech'}
				data={'some problem will be listed here'}
				media=""
			/>
		</div>
	);
};

export default ProjectDetails;
