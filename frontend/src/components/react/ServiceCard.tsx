import React, { type ReactElement } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Button } from '../ui/button';

interface ServiceCardProps {
	service: String;
	description: String;
	icon: ReactElement;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	service,
	description,
	icon,
	url,
}) => {
	const handleRedirect = (url) => {
		window.location.href = url;
	};
	return (
		<div className="min-h-[400px] min-w-[300px] bg-transparent border-2 t mx-2 rounded flex flex-col justify-end items-start p-3 text-white">
			<MdArrowOutward className="text-5xl ml-auto mb-auto" />
			{icon}
			<p className="font-bold mr-auto mx-2 text-4xl">{service}</p>
			<p className="mb-8 mx-2">{description}</p>
			<div className="ml-auto">
				<Button onClick={() => handleRedirect(url)} variant="ghost" size="lg">
					Read Case Studies
				</Button>
			</div>
		</div>
	);
};

export default ServiceCard;
