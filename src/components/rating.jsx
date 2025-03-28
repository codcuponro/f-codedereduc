"use client"
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ totalRating = 5 }) => {
    const maxStars = 5;
    
    return (
        <div className="bg-[#FFA645] flex py-[5px] px-[10px] gap-[2px] rounded-full w-fit mt-[26px] no-js">
            {
                [...Array(maxStars)].map((_, idx) => (
                    <span key={idx}>
                        {idx < totalRating ? 
                            <FaStar className="w-[17px] text-white" /> 
                            : <FaRegStar className="w-[17px] text-white" />
                        }
                    </span>
                ))
            }
        </div>
    );
}

export default Rating;
