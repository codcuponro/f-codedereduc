import Image from 'next/image'
import React from 'react'

const PopularSearch = () => {
    return (
        <>
            <div className='mt-[30px]'>
                <h3 className='text-xl text-dark font-semibold mb-5 '>Cautari populare</h3>
                <ul className='text-sm text-dark flex flex-col gap-1.5'>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Cod reducere carVertical
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Cod reducere Answear</li>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Cod reducere ePantofi</li>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Cod reducere Fashion Days</li>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Cod reducere Footshop</li>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Cod reducere Modivo</li>
                    <li className='flex items-center gap-2'>
                        <Image src="/svg/search-green.svg" alt='' width={22} height={22} />
                        Voucher Flanco</li>
                </ul>
            </div>
        </>
    )
}

export default PopularSearch