import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoresCard = ({ data }) => {
    return (
        <article className='border bg-pure rounded-lg overflow-hidden flex flex-col justify-between'>
            <figure className='overflow-hidden'>
                <Link 
                    href={`/magazine/${data.Slug}`} 
                    aria-label={`Vezi coduri reducere și vouchere pentru ${data.Name}`}
                    className="no-js"
                >
                    <Image 
                        src={data?.Icon?.url}
                        alt={`Logo ${data.Name} - Magazin partener CodCupon`}
                        layout="responsive"
                        width={575}
                        height={165}
                        objectFit="cover"
                        quality={10}
                        priority
                        className='!h-[130px] object-cover'
                    />
                </Link>
            </figure>

            <div className='py-[15px] px-2 flex justify-center'>
                <Link 
                    href={`/magazine/${data.Slug}`} 
                    aria-label={`Vezi ${data?.coupons_and_deals?.length} coduri reducere și vouchere pentru ${data.Name}`}
                    className="no-js"
                >
                    <button 
                        className='bg-[#F3F4F6] flex items-center justify-center gap-1 px-2.5 text-xs text-dark font-bold py-1 rounded-full'
                        aria-label={`${data?.coupons_and_deals?.length} coduri reducere disponibile pentru ${data.Name}`}
                    >
                        <div className='w-2 h-2 bg-green-500 rounded-full' aria-hidden="true" />
                        {data?.coupons_and_deals?.length} Vouchere {data.Name}
                    </button>
                </Link>
            </div>
        </article>
    )
}

export default StoresCard