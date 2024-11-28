import React from 'react';
import { Button } from '../ui/button';

const TestimonialsContainer = ({ testimonials }) => {
	const maxLength = 300;

	const truncateTestimonial = (text) => {
		if (text.length > maxLength) {
			return text.slice(0, maxLength) + '...';
		}
		return text;
	};

	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="py-10 w-full flex flex-wrap justify-center overflow-x-auto space-x-8 snap-x snap-mandatory">
			{testimonials.map((item, index) => (
				<div
					key={index}
					className="bg-white text-primary flex flex-col items-center justify-center rounded w-[500px] min-h-[300px] p-6 text-left flex-wrap space-y-4 snap-center">
					<p>
						{isOpen ? item.testimonial : truncateTestimonial(item.testimonial)}
					</p>
					<div className="flex justify-between items-center w-full space-y-2">
						<Button onClick={() => setIsOpen(!isOpen)} variant="ghost">
							{isOpen ? 'Read Less' : 'Read More'}
						</Button>
						<div className="text-accent-secondary">
							<p className="text-right font-bold">{item.name}</p>
							<p className="text-sm text-right font-extralight">
								{item.company}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TestimonialsContainer;
