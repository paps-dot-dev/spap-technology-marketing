import React, {useEffect} from 'react';
import {useState} from 'react';
import {motion} from 'framer-motion';

const BlogContainer = () => {
    const [posts, setPosts] = React.useState({});
    const fetchBlogPosts = async () => {
        try {
            const response = await fetch('/api/blog', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
            }


           const data = await response.json();
            console.log(data)
            setPosts(data);
        } catch (error) {
            console.error(error);
           // Return an empty array in case of an error
        }
    };

    useEffect(() => {
        fetchBlogPosts()
    }, []);


    return (
        <section>
            <h2 className={'bokor-regular text-5xl border-b-2 w-fit mb-8'}>Recent Articles</h2>

            {posts.total_results > 0 ? (
                <ul className={'flex flex-wrap gap-8'}>
                    {posts.data?.map((post) => (
                        <motion.li initial={{translateX:-100}} animate={{translateX: 0}} className="w-96 relative rounded-xl group" key={post.id}>
                            <a target={'_blank'} href={post.web_url}>
                            <img className="w-full object-cover rounded-xl opacity-30 group-hover:opacity-100 transition" src={post.thumbnail_url} alt={post.title}/>
                            <div className={'absolute bottom-0 z-20 p-8 w-3/4'}>
                                <p className={'text-2xl group-hover:text-accent-magenta'}>{post.title}</p>
                            </div>
                            </a>
                        </motion.li> // Assuming `id` and `title` exist
                    ))}
                </ul>
            ) : (
                <p>No blog posts found.</p>
            )}
        </section>
    );
};

export default BlogContainer;
