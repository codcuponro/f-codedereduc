import Image from 'next/image'
import React from 'react'

const CategoryIconCard = ({ data }) => {
    return (
        <a href={`/categories/${data?.Slug}`}>
            <div className='flex flex-col justify-center items-center py-[37px]'>
                <Image src={data?.Icon?.url || `/svg/category.svg`} alt='' width={60} height={60} />
                <p className='text-center mt-5'>{data?.Name}</p>
            </div>
        </a>
    )
}

export default CategoryIconCard