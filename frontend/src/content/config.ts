import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		completionDate: z.date(),
		tags: z.array(z.string()),
	}),
});
