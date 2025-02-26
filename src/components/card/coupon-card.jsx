import React from 'react'
import CouponButton from './coupon-button'

const CouponCard = ({ data }) => {
  return (
    <div className='border rounded-lg flex flex-col justify-between'>
      <div>
        <figure className='border-b'>
          <img src={data?.Icon?.url || "/images/fallback.png"} alt="" width="218" height="130" className='w-full' />
        </figure>
        <p className='font-medium p-[15px] pb-0 text-dark'>{data?.Title}</p>
      </div>
      <div className='p-[15px] pt-0'>
        <CouponButton
          label={data?.CouponsType !== "Promotion" && "Copy Code"}
          title={data?.CouponCode}
          data={data}
        />
        <button className='bg-[#F3F4F6] px-2.5 text-xs line-clamp-1 text-dark font-bold py-1 rounded-full mt-[12px]'>
          {data?.CouponsType === "Promotion" ? "Promotion" : "Coupon"}{" "}{data?.categories?.[0]?.Name}
        </button>
      </div>
    </div>
  )
}

export default CouponCard