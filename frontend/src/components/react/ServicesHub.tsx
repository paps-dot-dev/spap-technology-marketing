import React from 'react';
import ServiceCard from './ServiceCard';
import { FaBeer } from 'react-icons/fa';
import {
	MdApi,
	MdApps,
	MdDataExploration,
	MdDataObject,
	MdWeb,
} from 'react-icons/md';

const ServicesHub: React.FC = () => {
	return (
		<div className="flex items-center overflow-x-scroll min-w-screen mt-8">
			<ServiceCard
				icon={<MdWeb className="text-7xl mb-16" />}
				service={'Websites'}
				description="some kind of description is going to go here. i am sure it will be a couple of sentences long"
			/>
			<ServiceCard
				icon={<MdApps className="text-7xl mb-16" />}
				service={'Apps'}
				description="some kind of description is going to go here. i am sure it will be a couple of sentences long"
			/>
			<ServiceCard
				icon={<MdApi className="text-7xl mb-16" />}
				service={'Integrations'}
				description="some kind of description is going to go here. i am sure it will be a couple of sentences long"
			/>
			<ServiceCard
				icon={<MdDataObject className="text-7xl mb-8" />}
				service={'Data Management'}
				description="some kind of description is going to go here. i am sure it will be a couple of sentences long"
			/>
		</div>
	);
};

export default ServicesHub;
