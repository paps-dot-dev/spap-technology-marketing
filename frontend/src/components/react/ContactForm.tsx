import React from 'react';
import { useState } from 'react';

interface FormDataProps {
	firstName: string;
	email: string;
	projectScope: string;
	campaignCategory: string;
	electronicConsent: boolean;
	signUpForNewsletter: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormDataProps>({
		firstName: '',
		email: '',
		projectScope: '',
		campaignCategory: 'development',
		electronicConsent: true,
		signUpForNewsletter: 'Yes',
	});

	const handleInputChange = (e) => {
		e.preventDefault();
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const handleNewsletterSubscribe = async () => {
		try {
			const response = await fetch('api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				// If the response status is not OK (e.g., 500), throw an error
				const errorMessage = await response.text(); // Get the raw response text for debugging
				throw new Error(`Failed to submit form: ${errorMessage}`);
			}
		} catch (error) {
			console.error('Error during form submission:', error);
			alert(`Error during form submission: ${error.message}`);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (formData.signUpForNewsletter === 'Yes') {
				handleNewsletterSubscribe();
			}
			// Send a POST request to the backend API
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json', // Set the content type for JSON
				},
				body: JSON.stringify(formData), // Send form data as JSON
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
				alert(data.message); // Display the message (success or error)
			}
		} catch (error) {
			// Log the error and show an alert in case of any issues
			console.error('Error during form submission:', error);
			alert(`Error during form submission: ${error.message}`);
		}
	};

	return (
		<div className="mt-8 w-full lg:mt-24 lg:px-96">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 text-white p-5 rounded-md w-full">
				<label className="text-md">
					First Name
					<input
						id="firstName"
						onChange={handleInputChange}
						value={formData.firstName}
						required
						type="text"
						placeholder="First Name"
						className="p-4 block text-lg outline-none bg-white/25 w-full rounded-full"
					/>
				</label>

				<label className="text-md">
					Email Address
					<input
						id="email"
						onChange={handleInputChange}
						value={formData.email}
						required
						type="email"
						placeholder="Email Address"
						className="p-4 text-lg outline-none block bg-white/25 w-full rounded-full"
					/>
				</label>

				<label className="text-md">
					Tell Me a Little About the Project.
					<input
						id="projectScope"
						value={formData.projectScope}
						onChange={handleInputChange}
						placeholder="I want to redesign my website."
						className="p-4 text-lg outline-none block bg-white/25 w-full rounded-full"
					/>
				</label>
				<label className="text-md">
					I'm interested in more information on
					<select
						onChange={handleInputChange}
						id="campaignCategory"
						value={formData.campaignCategory}
						className=" p-4 text-lg outline-none block bg-white/25 w-full rounded-full">
						<option value={'development'}>Modern Web Tools</option>
						<option value={'marketing'}>Email Marketing</option>
						<option value={'business'}>Business Tools</option>
						<option value={'design'}>Web Design Tips</option>
					</select>
				</label>
				<label className="text-xs mt-4">
					<input
						required
						className="mr-2"
						type="checkbox"
						checked={formData.electronicConsent}
						onChange={handleInputChange}
					/>
					I consent to receiving newsletter and email communications from SPAP
					Technology Solutions.
				</label>
				<label className="text-md bg-white  p-4 rounded-md bg-gradient-to-b from-indigo-500 to-violet-500 font-bold text-lg">
					<span className="">Subscribe to 'Riffs. Code. Coffee.'</span>
					<span className="block font-medium text-xs mb-4">
						A free newsletter where I talk about music, tech, coffee, and
						everything in between.
					</span>
					<select
						onChange={handleInputChange}
						value={formData.signUpForNewsletter}
						id="signUpForNewsletter"
						className=" p-4 mt-1 text-lg outline-none block bg-white/25 w-full rounded-full">
						<option>Yes</option>
						<option>No</option>
					</select>
				</label>

				<button
					type="submit"
					className="p-4 block mx-auto w-5/6 bg-indigo-500 rounded-full text-white font-bold mt-2">
					Continue
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
