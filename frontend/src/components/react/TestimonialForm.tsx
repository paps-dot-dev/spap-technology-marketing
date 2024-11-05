import React, { useState } from 'react';
import { Input } from '../ui/input.tsx';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { cn } from '@/lib/utils';
import {Textarea} from '../ui/textarea.tsx'
import StarRatingSelector from "@/components/react/StarRatingSelector.tsx";


function TestimonialForm(props) {
    const [ratingValue, setRatingValue] = React.useState(1);
    const [formData, setFormData] = React.useState({
        name: '',
        companyName: '',
        message: '',
        email: ''

    })

    const saveTestimonial = async () => {

        let formAndRating = {
            name: formData.name,
            company: formData.companyName,
            message: formData.message,
            email: formData.email,
            rating: ratingValue

        }
        try{

            const response = await fetch('/api/testimonials/save-testimonial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the content type for JSON
                },
                body: JSON.stringify(formAndRating), // Send form data as JSON
            });

            // Check if the response status is OK
            if (!response.ok) {
                // If the response status is not OK (e.g., 500), throw an error
                const errorMessage = await response.text(); // Get the raw response text for debugging
                throw new Error(`Failed to submit form: ${errorMessage}`);
            }

            // Parse the JSON response from the server
            const data = await response.json();

            // Handle the response message

        } catch (error) {
            // Log the error and show an alert in case of any issues
            console.error('Error during form submission:', error);
            alert(`Error during form submission: ${error.message}`);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await saveTestimonial();
        let formAndRating = {
            name: formData.name,
            company: formData.companyName,
            message: formData.message,
            email: formData.email,
            rating: ratingValue

        }
        try{

        const response = await fetch('/api/testimonials/new-testimonial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type for JSON
            },
            body: JSON.stringify(formAndRating), // Send form data as JSON
        });

        // Check if the response status is OK
        if (!response.ok) {
            // If the response status is not OK (e.g., 500), throw an error
            const errorMessage = await response.text(); // Get the raw response text for debugging
            throw new Error(`Failed to submit form: ${errorMessage}`);
        }

        // Parse the JSON response from the server
        const data = await response.json();

        // Handle the response message
        if (data.message) {
            alert(data.message);
            window.location.href = `/referrals/${formAndRating.email}`;// Display the message (success or error)
        }
    } catch (error) {
        // Log the error and show an alert in case of any issues
        console.error('Error during form submission:', error);
        alert(`Error during form submission: ${error.message}`);
    }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    let {name, companyName, message, email} = formData

    return (
        <form onSubmit={handleSubmit} className="bg-white p-10 lg:p-20 rounded-xl font-medium space-y-4">
            <h1 className="text-3xl font-bold">Leave a Review!</h1>

            <label >
                Name
                <Input onChange={handleChange} id={'name'} value={name} className={'text-black'} required placeholder="Your Name"/>
            </label>
            <label>
                Company
                <Input onChange={handleChange} id={'companyName'} value={companyName} className={'text-black'} placeholder="Company Name"/>
            </label>
            <label>
                Email Address
                <Input onChange={handleChange} id={'email'} value={email} className={'text-black'} required placeholder="Company Name"/>
            </label>

            <StarRatingSelector setRatingValue={setRatingValue} ratingValue={ratingValue}/>
            <Textarea onChange={handleChange} id={'message'} value={message} className={'min-h-36 text-black'} placeholder={'Leave your thoughts here...'}/>
            <Button type={'submit'} className={''} size={'lg'}>Submit Review</Button>
        </form>
    );
}

export default TestimonialForm;