import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { getFooter } from '../../services';

const Footer = async () => {
  const footerRes = await getFooter()
  
  return (
    <footer className='bg-primary pt-[68px] pb-6 md:pb-[91px] relative'>
      {/* subscribe  */}
      <div className='container mx-auto px-4 lg:px-0 flex flex-col md:flex-row md:items-center gap-10 justify-between mb-[116px]'>
        <h5 className='font-semibold text-[28px] flex-1 max-w-[470px] leading-[38px] text-pure'>Signup for the latest deals and
          coupons delivered weekly </h5>
        <div className='flex-1 flex md:justify-end gap-[5px]'>
          <input
            type="text"
            className='py-[14px] px-5 bg-white/10 max-w-[380px] w-full text-[#E5E7EB] rounded-md outline-none'
            placeholder='Enter your email address'
          />
          <button className='bg-pure text-primary py-4 px-10 rounded-md hover:bg-white/10 hover:text-pure border border-white'>Subscribe</button>
        </div>
      </div>

      <div className='container mx-auto px-4 lg:px-0 grid gap-8 grid-cols-2 md:grid-cols-5 lg:grid-cols-6'>
        <div className='lg:col-span-2 gap-14 col-span-2 md:col-span-auto'>
          <Link href="/">
            <Image src="/logo.svg" alt='logo' width={160} height={40} className='w-[160px]' />
          </Link>
          <p className='mt-5 max-w-[270px] mb-[22px] text-white/70'>{footerRes?.Caption}
          </p>
          <Link href="#" className='text-pure gap-2.5 text-sx flex items-center'>
            <Image src="/svg/phone-ring.svg" alt='' className='' width={20} height={20} />
            <a href={`${footerRes?.MobileNumber?.Href}`} target='_blank'>
              {footerRes?.MobileNumber?.Label}
            </a>
          </Link>
        </div>
        {/* resources nav  */}
        <div>
          <h6 className='text-pure font-semibold text-lg'>Resources</h6>
          <ul className='mt-[35px] flex gap-3 flex-col'>
            {
              footerRes?.Resources?.map((item, idx) => (
                <li key={idx} className='text-white/70 hover:text-pure'>
                  <Link href={item.Href}>{item.Label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* Company Nav  */}
        <div>
          <h6 className='text-pure font-semibold text-lg'>Company</h6>
          <ul className='mt-[35px] flex gap-3 flex-col'>
            {
              footerRes?.Company?.map((item, idx) => (
                <li key={idx} className='text-white/70 hover:text-pure'>
                  <Link href={item.Href}>{item.Label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* Quick Links Nav  */}
        <div>
          <h6 className='text-pure font-semibold text-lg'>Quick Links</h6>
          <ul className='mt-[35px] flex gap-3 flex-col'>
            {
              footerRes?.QuickLinks?.map((item, idx) => (
                <li key={idx} className='text-white/70 hover:text-pure'>
                  <Link href={item.Href}>{item.Label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* Follow  */}
        <div>
          <h6 className='text-pure font-semibold text-lg'>Follow Us On</h6>
          <ul className='mt-[35px] flex gap-4 flex-wrap xl:flex-nowrap'>
            <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
              <Link href={footerRes?.Facebook || "#"}><FaFacebookF /></Link>
            </li>
            <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
              <Link href={footerRes?.Twitter || "#"}><FaTwitter /></Link>
            </li>
            <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
              <Link href={footerRes?.Youtube || `#`}><FaYoutube /></Link>
            </li>
            <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
              <Link href={footerRes?.Linkedin || `#`}><FaLinkedinIn /></Link>
            </li>
          </ul>
          <p className='text-white/70 mt-[25px]'>© 2023 Codcupon</p>
        </div>
      </div>

      <Image src="/images/footer-shap-1.png" alt='' width={160} height={160} className='absolute right-0 top-10' />
      <Image src="/images/footer-shape-2.png" alt='' width={160} height={160} className='absolute left-0 bottom-0' />
    </footer>
  )
}

export default Footer
