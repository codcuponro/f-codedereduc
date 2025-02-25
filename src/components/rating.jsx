import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";

const Rating = ({ totalRating = 5 }) => {
    const maxStars = 5; // Total number of stars
    return (
        <div className='bg-[#FFA645] flex py-[5px] px-[10px] gap-[2px] rounded-full w-fit mt-[26px]'>
            {
                [...Array(maxStars)].map((_, idx) => (
                    idx < totalRating ? 
                        <FaStar key={idx} className='w-[17px] text-white' /> 
                        : <FaRegStar key={idx} className='w-[17px] text-white' />
                ))
            }
        </div>
    );
}

export default Rating;
