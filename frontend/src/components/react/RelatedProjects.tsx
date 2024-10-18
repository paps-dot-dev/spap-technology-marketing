import React, { useState, useEffect } from 'react';

interface RelatedProjectsProps {
	tags: string[];
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ tags }) => {
	const [relatedProjects, setRelatedProjects] = useState<[]>([]);

	const fetchRelatedProducts = async () => {
		try {
			// Convert tags array to query parameter string
			const query = tags
				.map((tag) => `tags=${encodeURIComponent(tag)}`)
				.join('&');

			// Make GET request with tags as query parameters
			const res = await fetch(`/api/related-projects?${query}`, {
				method: 'GET',
			});

			const data = await res.json();
			setRelatedProjects(data);
		} catch (error) {
			console.error('Error fetching related projects:', error);
		}
	};

	useEffect(() => {
		if (tags.length > 0) {
			fetchRelatedProducts();
		}
	}, [tags]);

	console.log(relatedProjects);
	return (
		<div>
			<p>Related Projects</p>
			{/* Render related projects */}
			{relatedProjects.map((project, index) => (
				<div key={index}>{project.project_name}</div>
			))}
		</div>
	);
};

export default RelatedProjects;
