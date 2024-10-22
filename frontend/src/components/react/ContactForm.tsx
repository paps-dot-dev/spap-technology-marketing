import React from 'react';
import { useState } from 'react';
import { Button } from '../ui/button';

interface FormDataProps {
	firstName: string;
	email: string;
	projectScope: string;
	campaignCategory: string;
	electronicConsent: boolean;
	signUpForNewsletter: string;
}

const ContactForm: React.FC = () => {
	const [isChecked, setIsChecked] = useState(true);
	const [nonConsentMessage, setNonConsentMessage] = useState(false);
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

	const handleConsentChange = () => {
		setFormData((prevFormData) => ({
			...prevFormData,
			electronicConsent: !prevFormData.electronicConsent,
		}));
	};

	const handleNewsletterSubscribe = async () => {
		if (formData.electronicConsent) {
			try {
				const response = await fetch('/api/newsletter', {
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
		} else {
			setNonConsentMessage(true);
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
		<div className="mt-8 w-full lg:my-16 lg:mb-32  ">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 text-white p-5 rounded-md w-full bg-background-primary/50 lg:p-20">
				<label className="text-sm">
					First Name
					<input
						id="firstName"
						onChange={handleInputChange}
						value={formData.firstName}
						required
						type="text"
						placeholder="First Name"
						className="p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded"
					/>
				</label>

				<label className="text-sm">
					Email Address
					<input
						id="email"
						onChange={handleInputChange}
						value={formData.email}
						required
						type="email"
						placeholder="Email Address"
						className="p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded"
					/>
				</label>

				<label className="text-sm">
					Tell Me a Little About the Project.
					<input
						id="projectScope"
						value={formData.projectScope}
						onChange={handleInputChange}
						placeholder="I want to redesign my website."
						className="p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded"
					/>
				</label>
				<label className="text-md">
					I'm interested in more information on
					<select
						onChange={handleInputChange}
						id="campaignCategory"
						value={formData.campaignCategory}
						className="p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full rounded">
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
						id="electronicConsent"
						onChange={handleConsentChange}
					/>
					I consent to receiving newsletter and email communications from SPAP
					Technology Solutions.
					{nonConsentMessage && (
						<p className="text-red-400 text-bold border-2 border-accent-pop p-4 text-lg rounded my-2">
							Hey! Looks like you forgot to check this box. Please check it to
							continue.
						</p>
					)}
				</label>

				<label className="text-md border-2  p-4 rounded-md  font-bold text-sm">
					<img
						className="rounded-xl lg:w-1/4 w-1/2 mb-2 object-cover"
						src="https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/RiffsCodeCoffee.png"
					/>
					<span className="text-xl">
						Subscribe to 'Riffs. Code. Coffee.' & Get my Guide to the Modern Web
						for Free!
					</span>
					<span className="block font-medium text-xs lg:text-sm mb-4 py-4 lg:w-3/4">
						A free newsletter where I talk about music, tech, coffee, and
						everything in between. <br />
						Subscribe to get my free{' '}
						<span className="font-bold">{`Unf[...]k Your Tech Stack Guide`}</span>{' '}
						where I share some of my favorite modern web tools and tips.
					</span>
					<select
						onChange={handleInputChange}
						value={formData.signUpForNewsletter}
						id="signUpForNewsletter"
						className="p-4 mt-1 block text-sm outline-none bg-transparent border-2 w-full lg:text-lg rounded">
						<option>Yes</option>
						<option>No</option>
					</select>
				</label>

				<Button
					variant="outline"
					className="my-8 p-10 bg-accent-primary text-text-primary"
					type="submit">
					Get In Touch.
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
