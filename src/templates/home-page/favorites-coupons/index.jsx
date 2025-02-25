import CouponCard from '@/components/card/coupon-card'
import Title from '@/components/title/title'
import React from 'react'

const FavoritesCoupons = ({data}) => {
  return (
    <section className='container mx-auto px-4 lg:px-0'>
      <Title
        title="Today’s top favorites coupons and deals"
        buttonLabel="Top 50 coupons and deals"
        buttonHref="/top-50-coupons-and-deals"
        hideButton
      />
      <div
        style={{ marginTop: '35px' }}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5'
      >
        {
          data && 
          data?.map((item, idx) => (
            <CouponCard key={idx} data={item} />
          ))
        }
      </div>

      <div className='mt-6 md:hidden'>
        <Title
          title="Today’s top favorites coupons and deals"
          buttonLabel="Top 50 coupons and deals"
          buttonHref="/top-50-coupons-and-deals"
          hideHeading
        />
      </div>
    </section>
  )
}

export default FavoritesCoupons