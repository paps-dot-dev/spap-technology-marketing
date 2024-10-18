import { supabase } from '@/db/supabase';

export const GET = async ({ url }) => {
	try {
		// Extract the query parameters from the URL
		const searchParams = new URL(url).searchParams;
		const tags = searchParams.getAll('tags'); // Get all 'tags' query parameters

		// Check if tags parameter is provided
		if (!tags || tags.length === 0) {
			return new Response(JSON.stringify({ error: 'Missing tags parameter' }), {
				status: 400,
			});
		}

		// Query Supabase with .contains() to filter by tags
		const { data, error } = await supabase
			.from('projects')
			.select('*')
			.contains('tags', tags); // Directly pass the tags array

		if (error) {
			throw new Error(error.message);
		}

		console.log(data);

		// Return the data as a JSON response
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		// Handle and log the error
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
};
