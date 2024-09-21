import type { APIRoute } from 'astro';

// need to add actual routing for this to sender.net
export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const name = data.get('name');
	const email = data.get('email');
	const message = data.get('message');
	// Validate the data - you'll probably want to do more than this
	if (!name || !email || !message) {
		return new Response(
			JSON.stringify({
				message: 'Missing required fields',
			}),
			{ status: 400 }
		);
	}
	// Do something with the data, then return a success response
	return new Response(
		JSON.stringify({
			message: 'Success!',
		}),
		{ status: 200 }
	);
};
