import React from 'react';
import {useState} from 'react'
import ProAudioCard from "@/components/react/(pro-audio)/ProAudioCard.tsx";

import {serviceScreens} from "@/lib/pro-audio.ts";

const ProAudioTabs = () => {
    const [activeTab, setActiveTab] = useState(serviceScreens[0])
    return (
        <div className={'w-full py-16'}>
            <nav className={'w-full'}>
                <ul className={'flex justify-between items-center gap-4 w-full text-xl md:text-4xl'}>
                    {serviceScreens.map((service) => (
                        <li onClick={()=>setActiveTab(service)} className={activeTab.name == service.name ? 'opacity-100 border-b-2 border-accent-magenta p-2 transition' : 'opacity-50 transition hover:opacity-100 cursor-pointer'} key={service.name}>{service.name}</li>
                    ))}
                </ul>
            </nav>
            <div className={'py-8'}>
            <ProAudioCard service={activeTab} />
            </div>
        </div>
    );
};

export default ProAudioTabs;
