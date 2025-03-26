"use client";
import Image from 'next/image';
import React from 'react';

const IconImage = ({ singleStore }) => {
  const websiteUrl = singleStore?.AffiliateLink || "#";
  return (
    <div className=''>
    <a
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!singleStore?.AffiliateLink) e.preventDefault(); // Prevents navigation when no URL
      }}
    >
      <Image
        src={singleStore?.Icon?.url || "/images/fallback.png"}
        alt=""
        width={170}
        height={170}
        className="rounded-lg border w-28 sm:w-[170px]"
      />
    </a>
    </div>
  );
};

export default IconImage;
