"use client"
import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ totalRating = 5 }) => {
    const maxStars = 5;
    const [hoveredStars, setHoveredStars] = useState(null);
    const [message, setMessage] = useState(false);
    const handleRating = (number) => {
        setMessage(true)
        setTimeout(()=>{
            setMessage(false)
        }, 2000)
    }
    
    return (
        <>
        <div 
            className="bg-[#FFA645] flex py-[5px] px-[10px] gap-[2px] rounded-full w-fit mt-[26px]"
            onMouseLeave={() => setHoveredStars(null)} // Reset on leave
        >
            {
                [...Array(maxStars)].map((_, idx) => (
                    <span
                        key={idx}
                        onClick={()=>handleRating(idx+1)}
                        onMouseEnter={() => setHoveredStars(idx + 1)}
                    >
                        {idx < (hoveredStars || totalRating) ? 
                            <FaStar className="w-[17px] text-white cursor-pointer" /> 
                            : <FaRegStar className="w-[17px] text-white cursor-pointer" />
                        }
                    </span>
                ))
            }
        </div>
        {
            message && <p className='text-green-800 text-sm font-semibold'>Multumim pentru vot</p>
        }
        
        </>
    );
}

export default Rating;
