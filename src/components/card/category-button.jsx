import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryButton = (props) => {
    const { Name, Slug } = props?.data;

    return (
        <a href={`/categories/${Slug}` || '#'}>
            <button className={`font-medium flex text-sm sm:text-base text-white items-center rounded-full hover:bg-[#6D28D9] bg-primary ${props?.small ? 'px-2.5 py-[3px] gap-[3px]' : 'py-[13px] px-[20px] gap-2.5'}`}>
                <Image src="/svg/category.svg" alt="" width={props?.small ? 15 : 24} height={props?.small ? 15 : 24} className={`${props?.small ? 'w-[15px]' : 'w-4 md:w-6'}`}/>
                {Name}
            </button>
        </a>
    )
}

export default CategoryButton