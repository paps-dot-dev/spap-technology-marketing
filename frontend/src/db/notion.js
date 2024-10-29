import { Client } from '@notionhq/client';

const notion = new Client({
	auth: import.meta.env.NOTION_TOKEN,
});

export { notion };
