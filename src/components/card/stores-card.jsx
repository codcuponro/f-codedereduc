import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoresCard = ({ data }) => {
    return (
        <div className='border bg-pure rounded-lg overflow-hidden flex flex-col justify-between'>
            <figure className='overflow-hidden'>
                <a href={`/magazine/${data.Slug}`} aria-label={data.Slug}>
                    <Image
                        src={data?.Icon?.url}
                        alt="Featured Image"
                        layout="responsive" // Auto scales image
                        width={575}
                        height={265}
                        objectFit="cover"
                        quality={10} // Reduces file size while maintaining clarity
                        priority // Only for above-the-fold images
                    />
                </a>
            </figure>
            <div className='p-[15px] flex justify-center'>
                <button className='bg-[#F3F4F6] px-2.5 text-xs text-dark font-bold py-1 rounded-full'>{data?.coupons_and_deals?.length} Coupons and Deals</button>
            </div>
        </div>
    )
}

export default StoresCard