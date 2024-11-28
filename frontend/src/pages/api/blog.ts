export const GET = async (req, res) => {
	const publicationId = 'pub_77425650-db9c-4a61-bc68-d5873180b5a9';

	try {
		const params = new URLSearchParams({
			order_by: 'publish_date',
			direction: 'desc',
			status: 'confirmed',
			// Replace with the field you want to sort by
			// Optional: Use "asc" for ascending or "desc" for descending
			limit: '10', // Optional: Limit the number of results
		});
		// Fetch posts from the Beehiiv API
		const response = await fetch(
			`https://api.beehiiv.com/v2/publications/${publicationId}/posts?${params.toString()}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${import.meta.env.BEEHIIV_TOKEN}`, // Ensure the token is correctly set in environment variables
				},
			}
		);

		if (!response.ok) {
			// If the response is not OK, throw an error with the status text
			throw new Error(`Error fetching posts: ${response.statusText}`);
		}

		const data = await response.json();

		// Return the data in the response
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Error in API route:', error);

		// Handle errors by returning a 500 response with a meaningful error message
		return new Response(
			JSON.stringify({
				error: 'Failed to fetch posts from Beehiiv API',
				details: error.message,
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
};
