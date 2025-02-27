"use client"
import Breadcrumb from '@/components/breadcrumb'
import CategoryButton from '@/components/card/category-button'
import CouponList from '@/components/card/coupon-list'
import Faqs from '@/components/faqs/faqs'
import React, { useEffect, useState } from 'react'
import { getUniqueCategories } from '@/utils'
import { getFavorites50Coupon } from "../../services"


const Top50CouponsAndDeals = () => {
  const [favoritesCoupon, setFavoritesCoupon] = useState()
  const [categories, setCategories] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const favoritesCoupon = await getFavorites50Coupon()
      const categories = getUniqueCategories(favoritesCoupon)
      setFavoritesCoupon(favoritesCoupon)
      setCategories(categories)
      setLoading(false)
    })()
  }, [])

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
                  loading ?
                    [1, 2, 3]?.map((item, idx) => (
                      <div role="status" key={idx} class="space-y-8 border rounded-xl overflow-hidden animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-36 bg-gray-300 rounded-sm sm:w-40 dark:bg-gray-500">
                          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>
                        <div class="w-full p-5">
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-48 mb-4"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[480px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[440px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[460px] mb-2.5"></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    ))
                    :
                    favoritesCoupon?.map((item, idx) => (
                      <CouponList key={idx} logo item={item} />
                    ))
                }
              </div>
              <Faqs name={favoritesCoupon?.[0]?.store?.Name} />
            </div>

            <aside className='lg:w-[286px]'>
              <h3 className='text-xl text-dark font-semibold mb-5'>Categories</h3>
              <div
                style={{ marginTop: '10px' }}
                className='flex flex-wrap gap-2.5'
              >
                {
                  loading ?
                    <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
                      <div class="flex items-center gap-2 flex-wrap w-[70%]">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-10"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-6"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-16"></div>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-4"></div>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-14"></div>
                      </div>
                    </div>
                   :
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
          <Breadcrumb path={breadcrumbPath} />
        </div>

      </section>
    </>
  )
}

export default Top50CouponsAndDeals

const breadcrumbPath = [
  {
    label: 'Top 50 coupons and deals',
    href: '/top-50-coupons-and-deals'
  }
]
