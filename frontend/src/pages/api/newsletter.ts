import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	try {
		// Parse incoming request data
		const data = await request.json().catch((err) => {
			console.error('JSON parsing error:', err);
			throw new Error('Invalid JSON payload');
		});
		console.log('Received data:', data);

		// Define the target URL for Sender.net
		const targetUrl = `https://api.beehiiv.com/v2
/publications/${import.meta.env.BEEHIIV_PUBLICATION_ID}/subscriptions`;

		// Prepare the payload for Sender.net
		let newSubData = {
			email: data.email,
			reactivate_existing: false,
			send_welcome_email: true,
			utm_source: 'SPAPWebsite',
			utm_medium: 'organic',
			referring_site: 'www.spaptechnology.com/contact',
		};

		// Send the request to Sender.net
		const beehiivResponse = await fetch(targetUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${import.meta.env.BEEHIIV_TOKEN}`, // Ensure this token is set correctly
			},
			body: JSON.stringify(newSubData),
		});

		// Log the status of the response for debugging purposes
		console.log('Sender.net response status:', beehiivResponse.status);

		// Check if the response was successful
		if (!beehiivResponse.ok) {
			// Read the error from the response
			const errorText = await beehiivResponse.text();
			throw new Error(`Failed to send data to Sender.net: ${errorText}`);
		}

		// If everything is successful, return a success message
		return new Response(
			JSON.stringify({ message: 'Subscription successful!' }),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	} catch (error) {
		// Log the error for debugging
		console.error('Error:', error.message);

		// Return error message as response
		return new Response(JSON.stringify({ message: error.message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
};
