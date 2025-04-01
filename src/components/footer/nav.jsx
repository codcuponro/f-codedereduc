import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getFooter } from '../../services';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import {constData} from "../../const"

const Nav = async ({t}) => {
    const footerRes = await getFooter()
    
    return (
        <>
            <div className='container mx-auto px-4 lg:px-0 grid gap-8 grid-cols-2 md:grid-cols-5 lg:grid-cols-6'>
                <div className='lg:col-span-2 gap-14 col-span-2 md:col-span-auto'>
                    <Link href="/">
                        <Image src="/logo.svg" alt='logo' width={160} height={40} className='w-[160px]' />
                    </Link>
                    <p className='mt-5 max-w-[270px] mb-[22px] text-white/70'>{footerRes?.Caption}
                    </p>
                    {/* <button className='text-pure gap-2.5 text-sx flex items-center'>
                        <Image src="/svg/phone-ring.svg" alt='' className='' width={20} height={20} />
                        <a href={`${footerRes?.MobileNumber?.Href || "#"}`} target='_blank'>
                            {footerRes?.MobileNumber?.Label}
                        </a>
                    </button> */}
                </div>
                {/* resources nav  */}
                <div>
                    <h6 className='text-pure font-semibold text-lg'>{constData?.footer.resources_title}</h6>
                    <ul className='mt-[35px] flex gap-3 flex-col'>
                        {
                            footerRes?.Resources?.map((item, idx) => (
                                <li key={idx} className='text-white/70 hover:text-pure'>
                                    <Link href={item.Href || "#"}>{item.Label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Company Nav  */}
                <div>
                    <h6 className='text-pure font-semibold text-lg'>{constData?.footer.Company_title}</h6>
                    <ul className='mt-[35px] flex gap-3 flex-col'>
                        {
                            footerRes?.Company?.map((item, idx) => (
                                <li key={idx} className='text-white/70 hover:text-pure'>
                                    <Link href={item.Href || "#"}>{item.Label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Quick Links Nav  */}
                <div>
                    <h6 className='text-pure font-semibold text-lg'>{constData?.footer.quick_links_title}</h6>
                    <ul className='mt-[35px] flex gap-3 flex-col'>
                        {
                            footerRes?.QuickLinks?.map((item, idx) => (
                                <li key={idx} className='text-white/70 hover:text-pure'>
                                    <Link href={item.Href || "#"}>{item.Label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Follow  */}
                <div>
                    <h6 className='text-pure font-semibold text-lg'>{constData?.footer.follow_us_title}</h6>
                    <ul className='mt-[35px] flex gap-4 flex-wrap xl:flex-nowrap'>
                        <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
                            <Link href={footerRes?.Facebook || "#"} aria-label={"facebook"}><FaFacebookF /></Link>
                        </li>
                        <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
                            <Link href={footerRes?.Twitter || "#"} aria-label={"twitter"}><FaTwitter /></Link>
                        </li>
                        <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
                            <Link href={footerRes?.Youtube || `#`} aria-label={"youtube"}><FaYoutube /></Link>
                        </li>
                        <li className='text-white border p-2 rounded-full hover:text-primary hover:bg-white hover:border-white'>
                            <Link href={footerRes?.Linkedin || `#`} aria-label={"linkedin"}><FaLinkedinIn /></Link>
                        </li>
                    </ul>
                    <p className='text-white/70 mt-[25px]'>© 2025 Codcupon</p>
                </div>
            </div>
        </>
    )
}

export default Nav