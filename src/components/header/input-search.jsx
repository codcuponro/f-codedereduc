import Image from 'next/image'
import React from 'react'

const InputSearch = ({full}) => {
    return (
        <>
            <div className={`bg-[#FCFDFE33] px-[22px] py-[13px] gap-[17px] w-full rounded-full  flex items-center ${full ? "w-full" : "max-w-[500px]"}`}>
                <Image src="/svg/search.svg" alt='' width={22} height={22} />
                <input type='text' className='text-white placeholder:text-white text-sm bg-transparent outline-none' placeholder='Search for stores' />
            </div>
        </>
    )
}

export default InputSearch