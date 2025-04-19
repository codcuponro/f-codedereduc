import CouponCard from '@/components/card/coupon-card'
import Title from '@/components/title/title'
import React from 'react'
import {constData} from "../../../const"
import { getActiveAndDisabledCoupons } from '@/utils'

const FavoritesCoupons = async ({data}) => {  
  const {activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(data)

  return (
    <section className='container mx-auto px-4 lg:px-0'>
      <Title
        title={constData?.fav_coupon_title}
        buttonLabel={constData?.fav_coupon_btn_label}
        buttonHref="/top-coduri-reducere"
        hideButton
        h1
      />
      <div
        style={{ marginTop: '35px' }}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5'
      >
        {
          activeCoupon.slice(0,10)?.map((item, idx) => (
            <CouponCard key={idx} data={item} />
          ))
        }
      </div>

      <div className='mt-6 md:hidden'>
        <Title
          title={constData?.fav_coupon_title}
          buttonLabel={constData?.fav_coupon_btn_label}
          buttonHref="/top-coduri-reducere"
          hideHeading
        />
      </div>
    </section>
  )
}

export default FavoritesCoupons