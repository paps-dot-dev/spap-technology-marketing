import React from 'react';
import {motion} from 'framer-motion';

const ProAudioProjectCard = ({data}) => {
    return (
        <motion.div initial={{translateX: -100}} animate={{translateX: 0}}  className={' relative bg-primary w-96 h-[350px] rounded-xl flex flex-col items-start justify-end group'}>
            <a href={`/projects/pro-audio/${data.id}`}>
            <div className={'absolute top-0 h-full w-full group-hover:opacity-100 opacity-30 transition rounded-xl'}>
                <img className={'w-full h-full object-cover rounded-xl'} src={data.thumbnail_url} alt="project image" />
            </div>
            <div className={'z-20 p-2'}>
            <p className={'text-4xl'}>{data.name} - {data.artist}</p>
                <div className={'flex gap-2'}>
                {data.badges.map((badge, i) => {
                    return (
                        <p className={'text-sm'} key={i}>{badge}</p>
                    )
                })}
                </div>
            </div>
            </a>

        </motion.div>
    );
};

export default ProAudioProjectCard;
