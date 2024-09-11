import React from 'react';
import { useState } from 'react';

interface FormDataProps {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	projectScope: String;
	electronicConsent: boolean;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormDataProps>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		projectScope: '',
		electronicConsent: true,
	});

	const handleInputChange = (e) => {
		console.log(e);
	};

	return (
		<div className="mt-8 w-full">
			<form className="flex flex-col gap-2 bg-white p-5 rounded-md w-full">
				<label className="text-xs">
					First Name
					<input
						required
						type="text"
						placeholder="First Name"
						className="p-4 block text-lg outline-none bg-indigo-100/50 w-full rounded-full"
					/>
				</label>
				<label className="text-xs">
					Last Name
					<input
						required
						type="text"
						placeholder="Last Name"
						className="p-4 text-lg outline-none bloc bg-indigo-100/50 w-full rounded-full"
					/>
				</label>
				<label className="text-xs">
					Email Address
					<input
						required
						type="email"
						placeholder="Email Address"
						className="p-4 text-lg outline-none block bg-indigo-100/50 w-full rounded-full"
					/>
				</label>
				<label className="text-xs">
					Tell Us a Little About the Project.
					<textarea
						placeholder="Brief Description of Project Scope"
						className="p-4 text-md outline-none block bg-indigo-100/50 w-full rounded-md"
					/>
				</label>
				<label className="text-xs mt-4">
					<input
						required
						className="mr-2"
						type="checkbox"
						checked={formData.electronicConsent}
						onChange={handleInputChange}
					/>
					I consent to receiving electronic communications from SPAP Technology
					Solutions, including emails, phone calls, or text messages.
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
