import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileHeader from './mobile-header'
import InputSearch from './input-search'
import { getHeader } from '../../services'

const Header = async ({ local }) => {
    const headerRes = await getHeader(local)
    return (
        <>
            <header className='py-3 bg-primary hidden md:block'>
                <div className='container flex items-center gap-[50px] justify-between mx-auto px-4 lg:px-0'>
                    <div className='flex items-center gap-[50px] flex-1'>
                        <Link href="/">
                            <Image src="/logo.svg" alt='logo' width={160} height={40} className='w-[160px]' />
                        </Link>
                        <InputSearch />
                    </div>
                    <div className='flex items-center gap-10 text-white'>
                        <nav className='flex items-center gap-10'>
                            {
                                headerRes?.Navigation?.map((item, idx) => (
                                    <Link href={item?.Href || "#"} key={idx}>{item?.Label}</Link>
                                ))
                            }
                        </nav>
                        <Link href="/magasins">
                            <Image src="/svg/grid-alt.svg" alt='icon' width={22} height={20} />
                        </Link>
                    </div>
                </div>
            </header>
            <MobileHeader headerRes={headerRes?.Navigation} />
        </>
    )
}

export default Header