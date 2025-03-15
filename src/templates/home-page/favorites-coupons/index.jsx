import CouponCard from '@/components/card/coupon-card'
import Title from '@/components/title/title'
import { useTranslations } from 'next-intl';
import React from 'react'

const FavoritesCoupons = ({data}) => {
  const t = useTranslations('data');
  
  return (
    <section className='container mx-auto px-4 lg:px-0'>
      <Title
        title={t('fav_coupon_title')}
        buttonLabel={t('fav_coupon_btn_label')}
        buttonHref="/top-50-coupons-and-deals"
        hideButton
        h1
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
          title={t('top_coupons_and_deals_title')}
          buttonLabel={t('top_coupons_and_deals_btn_label')}
          buttonHref="/top-50-coupons-and-deals"
          hideHeading
        />
      </div>
    </section>
  )
}

export default FavoritesCoupons