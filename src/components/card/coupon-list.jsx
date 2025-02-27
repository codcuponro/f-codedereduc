import React from 'react'
import CouponButton from './coupon-button'
import Image from 'next/image'
import { isExpired } from '@/utils';

const CouponList = ({ logo, item }) => {
    const disabled = isExpired(item?.ExpireDate);
    
    return (
        <div className={`border border-[#DEE2E6] overflow-hidden rounded-lg`}>
            <div className='flex flex-row gap-3 sm:gap-4 sm:justify-center items-center md:gap-[27px]'>
                {
                    logo ? <figure className='md:border-r flex justify-center items-start sm:items-center'>
                        <Image src={item?.Icon?.url || item?.store?.Icon?.url || "/images/fallback.png"} alt='' width={125} height={125} className='scale-y-105 w-[170px] md:w-[125px]' />
                    </figure>
                        : <h6 className={`font-extrabold text-[34px] flex flex-col pl-[30px] py-[26px] leading-8 ${disabled ? 'text-[#505050]' : 'text-primary'}`} >
                            {item?.DiscountValue}
                            <span>OFF</span>
                        </h6>
                }

                <div className={`flex flex-col py-4 pr-3 md:pr-[30px] sm:flex-row sm:items-center gap-4 ${logo && '!pl-0'}`}>
                    <div className='flex flex-col text-left md:justify-start md:items-start'>
                        <button className='bg-[#F3F4F6] px-2.5 w-fit text-xs text-dark font-bold py-1 rounded-full'>
                            { item?.CouponsType === "Promotion" ? "Promotion" : "Coupon"}{" "}{item?.categories?.[0]?.Name}
                        </button>
                        <h3 className='font-medium sm:text-lg md:text-[22px] md:leading-[30px] mt-2.5'>{item?.Title}</h3>
                    </div>
                    <div className='hidden sm:block'>
                        <CouponButton
                            label={item?.CouponsType !== "Promotion" && "Copy Code"}
                            title={item?.CouponCode}
                            data={item}
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>
            <div className='pl-2 pr-1 -mt-3 pb-2 sm:hidden'>
                <CouponButton
                    label={item?.CouponsType !== "Promotion" && "Copy Code"}
                    title={item?.CouponCode}
                    data={item}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default CouponList