import { notion } from '@/db/notion';

export const POST = async ({ request }) => {
	try {
		const data = await request.json().catch((err) => {
			console.error('JSON parsing error:', err);
			throw new Error('Invalid JSON payload');
		});
		console.log('Received data:', data);

		// Define the lead data to be posted
		let newLeadData = {
			email: data.email,
			contactName: data.firstName,
			notes: data.projectScope,
			campaignCategory: data.campaignCategory, // Adding the campaign category
		};

		// Use Notion SDK to create a new entry in the Notion database
		const response = await notion.pages.create({
			parent: { database_id: '5ceb4c0329bd44beac3208314c65c702' },
			properties: {
				'Contact Email': {
					type: 'email',
					email: newLeadData.email,
				},
				'Contact Name': {
					type: 'rich_text',
					rich_text: [
						{
							text: {
								content: newLeadData.contactName,
							},
						},
					],
				},
				Notes: {
					type: 'rich_text',
					rich_text: [
						{
							text: {
								content: newLeadData.notes,
							},
						},
					],
				},
				Tags: {
					type: 'multi_select',
					multi_select: [
						{
							name: newLeadData.campaignCategory,
						},
						{
							name: 'Website',
						},
					],
				},
			},
		});

		console.log('Successfully added new lead to database:', response);
		return new Response(
			JSON.stringify({ success: true, message: 'Lead added successfully' }),
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error('Error adding lead to Notion database:', error);
		return new Response(
			JSON.stringify({ success: false, message: error.message }),
			{
				status: 500,
			}
		);
	}
};
