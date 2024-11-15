import React, {useEffect, useState} from 'react';
import ProAudioProjectCard from "@/components/react/(pro-audio)/ProAudioProjectCard.tsx";

const ProAudioCard = ({service}) => {

    const [audioProjects, setAudioProjects] = useState<[]>([]);

    const fetchAudioProjects = async () => {
            const response = await fetch(`/api/projects/audio`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                }
            });
            const data = await response.json();
            if(data) {
               const filteredData = data.filter(item => item.type == service.type)
                setAudioProjects(filteredData);
            }
    }

    useEffect(()=> {
     fetchAudioProjects()
    }, [service])



    console.log(audioProjects);

    return (
        <>
        <div className={'text-4xl w-2/3 space-y-2 py-8'}>
           <p>
               {service.overview}
           </p>
            <p>{service.description}</p>
        </div>
            <div className={'flex items-center gap-4'}>
                {audioProjects.map(item => (
                    <ProAudioProjectCard data={item}/>
                ))}
            </div>
        </>
    );
};

export default ProAudioCard;
