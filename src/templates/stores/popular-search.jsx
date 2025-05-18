import Image from 'next/image'
import React from 'react'
import { getPopularSearch } from '../../services'

const PopularSearch = async () => {
    const data = await getPopularSearch()
    return (
        <>
            <div className='mt-[30px]'>
                <h3 className='text-xl text-dark font-semibold mb-5 '>Recherches populaires</h3>
                <nav className='text-sm text-dark flex flex-col gap-1.5'>
                    {
                        data?.PopularSearch?.map((item, idx) => (
                            <a href={item?.Href || "#"} key={idx} className='flex items-center gap-2 hover:underline'>
                                <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                                {item?.Label}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </>
    )
}

export default PopularSearch