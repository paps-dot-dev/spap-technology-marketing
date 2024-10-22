import React from 'react';
import { motion } from 'framer-motion';
import ProjectDetailsDropdown from './ProjectDetailsDropdown';

const ProjectDetails = ({ data }) => {
	return (
		<div className="text-background-primary lowercase space-y-4">
			<ProjectDetailsDropdown
				title={'The Problem'}
				data={data.problem_description}
				media=""
				technologies=""
			/>
			<ProjectDetailsDropdown
				title={'The Process'}
				data={data.process_description}
				media=""
				technologies=""
			/>
			<ProjectDetailsDropdown
				title={'The Solution'}
				data={data.solution_description}
				media=""
				technologies=""
			/>
			<ProjectDetailsDropdown
				title={'The tech'}
				data={'Here is the list of technologies I used on this project'}
				media=""
				technologies={data.technology_description}
			/>
		</div>
	);
};

export default ProjectDetails;
