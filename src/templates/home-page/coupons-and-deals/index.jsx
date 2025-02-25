import CouponCard from '@/components/card/coupon-card'
import Title from '@/components/title/title'
import { getCouponAndDeals } from '@/services'
import React from 'react'

const CouponsAndDeals = async () => {
  const data = await getCouponAndDeals()

  return (
    <section className='container mx-auto px-4 lg:px-0'>
      <Title
        title="Top coupons and deals"
        buttonLabel="See all coupons and deals"
        buttonHref="#"
        hideButton
      />
      <div
        style={{ marginTop: '35px' }}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5'
      >
        {
          data?.map((item, idx) => (
            <CouponCard key={idx} data={item} />
          ))
        }
      </div>
      <div className='mt-6 md:hidden'>
        <Title
          title="Top coupons and deals"
          buttonLabel="See all coupons and deals"
          buttonHref="#"
          hideHeading
        />
      </div>
    </section>
  )
}

export default CouponsAndDeals