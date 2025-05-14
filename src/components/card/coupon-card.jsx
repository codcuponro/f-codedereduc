import React from 'react'
import CouponButton from './coupon-button'
import Link from 'next/link'

const CouponCard = ({ data }) => {
  return (
    <div className='border rounded-lg flex bg-[#f9fafc] flex-col justify-between overflow-hidden'>
      <div>
        <figure className='border-b'>
          <Link href={data?.store?.Slug || "#"} target='_blank'>
            <img src={data?.Icon?.url || data?.store?.Icon?.url || "/images/fallback.png"} alt="" width="218" height="130" className='w-full h-[130px] object-cover' />
          </Link>
        </figure>
        <p className='font-medium p-[15px] pb-0 text-dark'>{data?.Title}</p>
      </div>
      <div className='p-[15px] pt-0'>
        <CouponButton
          label={data?.CouponsType !== "Promotion" && "Copiaza codul"}
          title={data?.CouponCode}
          data={data}
        />
        <Link href={data?.store?.Slug || "#"} className='bg-[#eef0f5] px-2.5 text-xs w-fit line-clamp-1 text-dark font-bold py-1 rounded-full mt-[12px]'>
          {data?.CouponsType === "Promotion" ? "Promotie" : "Cod reducere"}{" "}{data?.store?.Name}
        </Link>
      </div>
    </div>
  )
}

export default CouponCard