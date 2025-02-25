import Breadcrumb from '@/components/breadcrumb'
import CategoryButton from '@/components/card/category-button'
import CouponList from '@/components/card/coupon-list'
import Faqs from '@/components/faqs/faqs'
import React from 'react'
import { getUniqueCategories } from '@/utils'
import {getFavorites50Coupon} from "../../services"


const Top50CouponsAndDeals = async () => {
  const favoritesCoupon  = await getFavorites50Coupon()
  const categories = getUniqueCategories(favoritesCoupon)
    
  return (
    <>
      <section className='container mx-auto px-4 lg:px-0 mt-5 md:mb-[50px]'>
        <div className='flex flex-col sm:flex-row items-start gap-[30px]'>
          <div className='max-w-[634px]'>
            <h2 className='text-dark font-semibold leading-9 mb-3 text-[28px]'>Top 50 coupons and deals Feb 2025</h2>
            <p>This page contains the best coupons and deals for February 2025, curated by the codcupon team. Save up to 50% off at your favorite stores.</p>
          </div>
        </div>

        <div className='mt-[30px]'>
          <div className='flex flex-col lg:flex-row gap-[50px]'>
            <div className='flex-1'>
              <div className='flex flex-col gap-[25px] mb-20'>
                {
                  favoritesCoupon?.map((item, idx) => (
                    <CouponList key={idx} logo item={item}/>
                  ))
                }
              </div>
              <Faqs name={favoritesCoupon?.[0]?.store?.Name}/>
            </div>

            <aside className='lg:w-[286px]'>
              <h3 className='text-xl text-dark font-semibold mb-5'>Categories</h3>
              <div
                style={{ marginTop: '10px' }}
                className='flex flex-wrap gap-2.5'
              >
                {
                  categories?.map((item, idx) => (
                    <CategoryButton key={idx} data={item} small />
                  ))
                }
              </div>
              <div className='mt-[30px]'>
                <h3 className='text-xl text-dark font-semibold mb-5 '>Popular searches</h3>
                <ul className='text-sm text-dark flex flex-col gap-1.5'>
                  <li>Cod reducere carVertical</li>
                  <li>Cod reducere Answear</li>
                  <li>Cod reducere ePantofi</li>
                  <li>Cod reducere Fashion Days</li>
                  <li>Cod reducere Footshop</li>
                  <li>Cod reducere Modivo</li>
                  <li>Voucher Flanco</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className='mt-16 mb-10'>
          <Breadcrumb path={breadcrumbPath}/>
        </div>

      </section>
    </>
  )
}

export default Top50CouponsAndDeals

const breadcrumbPath = [
  {
    label: 'Top 50 coupons and deals',
    href:'/top-50-coupons-and-deals'
  }
]
