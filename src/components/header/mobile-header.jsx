"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import InputSearch from './input-search'

const MobileHeader = ({ headerRes }) => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      <header className='py-1.5 pb-0 md:py-[16px] px-4 sticky top-0 bg-primary md:hidden z-[200] flex items-center justify-between'>
        <Link href="/">
          <Image src="/logo.svg" alt='logo' width={160} height={40} className='w-[120px] md:w-[160px]' />
        </Link>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className='w-[50px] h-[50px] flex justify-center items-center'
          aria-label={isMobile ? "Close menu" : "Open menu"}
        >
          {
            isMobile ? <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
              <path d="M16 8L8 16M12 12L16 16M8 8L10 10" stroke="#fff" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
            </svg>
              :
              <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none">
                <g id="style=stroke">
                  <g id="menu-fries">
                    <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6Z" fill="#fff" />
                    <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M8.25 12C8.25 11.5858 8.58579 11.25 9 11.25L21 11.25C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75L9 12.75C8.58579 12.75 8.25 12.4142 8.25 12Z" fill="#fff" />
                    <path id="vector (Stroke)_3" fillRule="evenodd" clipRule="evenodd" d="M2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill="#fff" />
                  </g>
                </g>
              </svg>
          }

        </button>
      </header>
      <nav className={`flex flex-col z-[110] p-4 py-6 bg-[#643ba8] text-white transition-all duration-300 fixed w-full 
        ${isMobile ? 'top-[55.75px]' : '-top-[100%]'}`
      }>
        {
          headerRes?.map((item, idx) => (
            <Link href={item?.Href || "#"} className='py-1' key={idx}>{item?.Label}</Link>
          ))
        }
      </nav>
      <div className='bg-primary pb-2.5 sticky top-[56px] z-[100] md:hidden px-3'>
        <InputSearch full />
      </div>
    </>
  )
}

export default MobileHeader