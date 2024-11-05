import React from 'react';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';

const ReferralForm = ({ referEmail }) => {
	const [formData, setFormData] = React.useState({
		referredBy: referEmail,
		referrals: [],
	});

	const [referralData, setReferralData] = React.useState({
		name: '',
		email: '',
	});

	const onReferralChange = (e) => {
		setReferralData({
			...referralData,
			[e.target.id]: e.target.value,
		});
	};

	const addReferral = () => {
		const moddedReferrals = [...formData.referrals, referralData];
		setFormData({
			...formData,
			referrals: moddedReferrals,
		});
		setReferralData({
			name: '',
			email: '',
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		addReferral();
	};

	const handleSaveReferrals = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const response = await fetch('/api/referrals', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json', // Set the content type for JSON
				},
				body: JSON.stringify(formData),
			});
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
				window.location.href = `/thank-you`;
				// Display the message (success or error)
			}
		} catch (error) {
			// Log the error and show an alert in case of any issues
			console.error('Error during form submission:', error);
			alert(`Error during form submission: ${error.message}`);
		}
	};

	return (
		<div className={'bg-white p-8 rounded-xl my-8'}>
			<p className={'font-bold py-4'}>
				Do know someone who could benefit from my services?
			</p>
			<p className={'text-sm'}>
				Refer them below, and receive a discount for{' '}
				<span className={'text-accent-primary font-bold'}>you</span>{' '}
				<i className={'font-bold'}>AND</i>{' '}
				<span className={'text-accent-pop font-bold'}>your friend</span> to use
				for your next project!
			</p>
			<form onSubmit={handleFormSubmit}>
				<label className={'text-sm'}>
					Referred By Email:
					<Input disabled value={formData.referredBy} />
				</label>
				<div className="border-b-2 p-2 border-black"></div>
				<div className={'p-4 shadow-xl'}>
					<label id={'name'} className={'text-sm'}>
						Referral Name:
						<Input
							required
							onChange={onReferralChange}
							id="name"
							value={referralData.name}
						/>
					</label>
					<label className={'text-sm'}>
						Referral Email:
						<Input
							required
							onChange={onReferralChange}
							id={'email'}
							value={referralData.email}
						/>
					</label>
					<Button type="submit" className={'bg-accent-pop mt-4'}>
						Add
					</Button>
				</div>
			</form>
			<div className={'my-4'}>
				{formData.referrals.map((item, idx) => (
					<div
						className={
							'p-8 my-4 shadow-sm rounded-xl border-2 border-background-primary'
						}
						key={idx}>
						<p>{item.name}</p>
						<p className={'opacity-50'}>{item.email}</p>
					</div>
				))}
			</div>
			<Button onClick={handleSaveReferrals}>Submit</Button>
		</div>
	);
};

export default ReferralForm;
