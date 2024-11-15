import { supabase } from '@/db/supabase';

export const GET = async ({ url }) => {
    try {
        // Extract the query parameters from the URL


        // Query Supabase with .contains() to filter by tags
        const { data, error } = await supabase
            .from('pro_audio_projects')
            .select('*')
             // Directly pass the tags array

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
