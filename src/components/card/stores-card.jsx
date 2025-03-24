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
                        height={165}
                        objectFit="cover"
                        quality={10} // Reduces file size while maintaining clarity
                        priority // Only for above-the-fold images
                        className='!h-[130px] object-cover'
                    />
                </a>
            </figure>

            <div className='py-[15px] px-2 flex justify-center'>
                <a href={`/magazine/${data.Slug}`} aria-label={data.Slug}>
                    <button className='bg-[#F3F4F6] flex items-center justify-center gap-1 px-2.5 text-xs text-dark font-bold py-1 rounded-full'>
                        <div className='w-2 h-2 bg-green-500 rounded-full' />
                        {data?.coupons_and_deals?.length} Vouchere {data.Name}
                    </button>
                </a>
            </div>
        </div>
    )
}

export default StoresCard