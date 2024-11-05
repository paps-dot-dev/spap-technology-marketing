import React from 'react';
import {MdStar, MdStarBorder} from "react-icons/md";

const StarRatingSelector = ({setRatingValue, ratingValue}) => {
    const ratingValues = [1,2,3,4,5];


    const handleValueChange = (event, value) => {
        event.preventDefault()
        setRatingValue(value);
    };

    return (
        <div className={'flex justify-between items-center md:justify-start md:space-x-8'}>
            {ratingValues.map(item => (
                <button value={item} className={'text-4xl'} onDrag={()=>setRatingValue(ratingValue+1)} onClick={(event) => handleValueChange(event, item)} key={item}>
                    {ratingValue >= item ? <MdStar /> : <MdStarBorder />}
                </button>
            ))}
        </div>
    );
};

export default StarRatingSelector;