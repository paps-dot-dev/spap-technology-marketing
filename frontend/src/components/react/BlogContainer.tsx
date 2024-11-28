import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PostTypes {
	total_results: number;
	data: [];
}
const BlogContainer = () => {
	const [posts, setPosts] = React.useState<PostTypes>({
		total_results: 0,
		data: [],
	});
	const fetchBlogPosts = async () => {
		try {
			const response = await fetch('/api/blog', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
			}

			const data = await response.json();
			console.log(data);
			setPosts(data);
		} catch (error) {
			console.error(error);
			// Return an empty array in case of an error
		}
	};

	useEffect(() => {
		fetchBlogPosts();
	}, []);

	return (
		<section className="p-4 text-text-primary bg-primary lg:py-32">
			<h2 className={'text-4xl lg:text-5xl mb-8'}>
				Insights from SPAP Technology
			</h2>
			<p className="lg:text-2xl lg:max-w-[50%]">
				Stay ahead of the curve with insights straight from SPAP Technology. Our
				blog, Riffs. Code. Coffee., delivers fresh takes on the latest tech
				trends, innovative tools, and creative strategies to help your business
				thrive.
			</p>
			<p className="my-8 lg:text-xl">
				From deep dives into cutting-edge technology to practical advice for
				scaling your business tech stack, we're here to spark inspiration in
				creative entrepreneurs.
			</p>
			{posts.total_results > 0 ? (
				<div className="lg:overflow-x-auto">
					<ul className="flex flex-col lg:flex-row lg:inline-flex gap-8">
						{posts.data?.map(
							(post: {
								id: string;
								web_url: string;
								thumbnail_url: string;
								title: string;
							}) => (
								<motion.li
									initial={{ translateX: -100 }}
									animate={{ translateX: 0 }}
									className="lg:w-full  lg:inline-block lg:min-w-[300px] relative rounded-xl group bg-primary"
									key={post.id}>
									<a target={'_blank'} href={post.web_url}>
										<img
											className="w-full object-cover rounded-xl opacity-30 group-hover:opacity-100 transition"
											src={post.thumbnail_url}
											alt={post.title}
										/>
										<div className="absolute bottom-0 z-20 p-8 w-full">
											<p className="text-2xl group-hover:text-accent-primary">
												{post.title}
											</p>
										</div>
									</a>
								</motion.li>
							)
						)}
					</ul>
				</div>
			) : (
				<p>No blog posts found.</p>
			)}
			{/* 
			{posts.total_results > 0 ? (
				<ul className={'flex flex-wrap gap-8'}>
					{posts.data?.map(
						(post: {
							id: string;
							web_url: string;
							thumbnail_url: string;
							title: string;
						}) => (
							<motion.li
								initial={{ translateX: -100 }}
								animate={{ translateX: 0 }}
								className="w-full lg:max-w-screen-sm relative rounded-xl group bg-primary"
								key={post.id}>
								<a target={'_blank'} href={post.web_url}>
									<img
										className="w-full object-cover rounded-xl opacity-30 group-hover:opacity-100 transition"
										src={post.thumbnail_url}
										alt={post.title}
									/>
									<div className={'absolute bottom-0 z-20 p-8 w-3/4'}>
										<p className={'text-2xl group-hover:text-accent-primary'}>
											{post.title}
										</p>
									</div>
								</a>
							</motion.li> // Assuming `id` and `title` exist
						)
					)}
				</ul>
			) : (
				<p>No blog posts found.</p>
			)} */}
		</section>
	);
};

export default BlogContainer;
