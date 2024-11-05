import { supabase } from "@/db/supabase";

export const POST = async ({ request }) => {
    try {
        const formData = await request.json();
        console.log('Received data:', formData);

        const { data, error } = await supabase
            .from('testimonials')
            .insert([
                {
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    rating: formData.rating,
                    testimonial: formData.message,
                },
            ])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return new Response(
                JSON.stringify({ message: 'Failed to submit review', error: error.message }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Thank you for your review!', data }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (err) {
        console.error('Request handling error:', err);
        return new Response(
            JSON.stringify({ message: 'Invalid JSON payload' }),
            {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
};