import Link from 'next/link'
import React from 'react'

const Title = (props) => {
  const {title, buttonLabel, buttonHref, white, hideButton, hideHeading} = props
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-10'>
        <h2 className={`text-2xl md:text-[34px] md:leading-[40px] font-semibold text-dark ${hideHeading && 'hidden md:block'} ${white && 'text-pure'}`}>{title}</h2>
        {
          buttonLabel && <Link 
              href={buttonHref} 
              className={` border rounded-[6px] text-center font-bold w-full md:w-auto py-2.5 px-[28px] ${hideButton && 'hidden md:block'}
                ${white ? 'hover:bg-white text-pure hover:text-primary' : 'hover:bg-primary hover:text-white text-primary border-primary'}
              `}
          >{buttonLabel}</Link>
        }
    </div>
  )
}

export default Title