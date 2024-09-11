import React, { type ReactElement } from 'react';
import { MdArrowOutward } from 'react-icons/md';

interface ServiceCardProps {
	service: String;
	description: String;
	icon: ReactElement;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	service,
	description,
	icon,
}) => {
	return (
		<div className="min-h-[400px] min-w-[300px] bg-gradient-to-br from-indigo-600 to-indigo-500 mx-2 rounded-xl flex flex-col justify-end items-start p-5 text-white">
			<MdArrowOutward className="text-5xl ml-auto mb-auto" />
			{icon}
			<p className="font-bold mr-auto mx-2 text-4xl">{service}</p>
			<p className="mb-8 mx-2">{description}</p>
		</div>
	);
};

export default ServiceCard;
