import React from 'react';
import ProAudioProjectCard from "@/components/react/(pro-audio)/ProAudioProjectCard.tsx";

const AudioProjectShowcase = ({data}) => {
    return (
        <div className={' '}>
            <div className={'flex justify-between items-center'}>
        <p className={'text-4xl'}>Click on a Project Below to learn more.</p>
            {/*<select className={'p-4 bg-primary text-white rounded-md'}>*/}
            {/*    <option disabled>Filter by...</option>*/}
            {/*    <option>All</option>*/}
            {/*    <option>Production</option>*/}
            {/*    <option>Mixing</option>*/}
            {/*    <option>Session Playing</option>*/}
            {/*    <option>Live Show</option>*/}
            {/*    <option>Editing</option>*/}
            {/*</select>*/}
            </div>
        <ul className="flex flex-wrap gap-8 mb-32">
                {data?.map(item => (
                   <ProAudioProjectCard data={item} key={item.id} />
                ))}
        </ul>
        </div>
    );
};

export default AudioProjectShowcase;
