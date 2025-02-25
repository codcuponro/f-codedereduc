import CategoryButton from '@/components/card/category-button';
import CouponList from '@/components/card/coupon-list';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import Faqs from '@/components/faqs/faqs';
import Breadcrumb from '@/components/breadcrumb';
import qs from "qs"
import { Request } from '@/services/Request';
import Rating from '@/components/rating';
import { getUniqueCategories } from '@/utils';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

async function getData(params) {
  const sparams = qs.stringify({
    populate: [
      'Icon', "users_permissions_user", "Social", "coupons_and_deals",
      'coupons_and_deals.Icon', "coupons_and_deals.categories.Icon", "coupons_and_deals.store.Icon"
    ],
    filters: {
      Slug: {
        $eq: params
      }
    }
  })
  const stores = await Request(`/stores?${sparams}`);
  return {
    singleStore: stores?.data?.[0]
  }
}

const Store = async ({ params }) => {
  const param = await params.single

  const { singleStore } = await getData(param)

  const activeCoupon = singleStore?.coupons_and_deals?.filter((item) => item.ExpireDate > new Date().toISOString().split('T')[0])
  const disableCoupon = singleStore?.coupons_and_deals?.filter((item) => item.ExpireDate < new Date().toISOString().split('T')[0])
  const categories = getUniqueCategories(singleStore?.coupons_and_deals)

  const breadcrumbPath = [
    {
      label: 'Store',
      href: '/store'
    },
    {
      label: param?.replace(/-/g, ' '),
      href: `/${param}`
    }
  ]

  return (
    <section className='container mx-auto px-4 lg:px-0 mt-5 mb:my-[50px]'>
      <div className='flex flex-row items-start gap-2 sm:gap-[30px]'>
        <Image src="/svg/nike-logo.svg" alt='' width={170} height={170} className='rounded-lg w-28 sm:w-[170px]' />
        <div className='max-w-[634px]'>
          <h2 className='text-dark font-semibold text-xl md:text-[28px]'>{singleStore?.Name}</h2>
          <p>{singleStore?.Excerpt}</p>
          <Rating totalRating={singleStore?.Rating} />
          <p className='text-xs font-medium mt-2.5'>Last edited by <span className='underline'>Alina Simion</span> on Feb 5th, 2025</p>
        </div>
      </div>

      <div className='mt-[30px]'>
        <h3 className='text-xl text-dark font-semibold mb-5'>{activeCoupon?.length} Coupons Codes and Deals Active</h3>
        <div className='flex flex-col lg:flex-row gap-[50px]'>
          <div className='flex-1'>
            <div className='flex flex-col gap-[25px]'>
              {
                activeCoupon?.length > 0 &&
                activeCoupon?.map((item, idx) => (
                  <CouponList key={idx} item={item} />
                ))
              }
            </div>
            <h3 className='text-xl text-dark font-semibold mb-5 mt-10'>{disableCoupon?.length} Coupons Codes and Deals Expired</h3>
            <div className='flex flex-col gap-[25px]'>
              {
                disableCoupon?.length > 0 &&
                disableCoupon?.map((item, idx) => (
                  <CouponList key={idx} disabled item={item} />
                ))
              }
            </div>
            <div className='single_store_content mt-10'>
              {
                singleStore &&
                <BlocksRenderer content={singleStore?.Content} />
              }
            </div>

            <Faqs name={singleStore?.Name} />
          </div>

          <aside className='w-[286px]'>
            <h3 className='text-xl text-dark font-semibold mb-5 '>Categories</h3>
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
              <h3 className='text-xl text-dark font-semibold mb-5 '>Contact</h3>
              <ul>
                <li className='text-sm !flex gap-1'>
                  <i>
                    <LuMapPin className='w-4' />
                  </i>
                  <address className='-mt-1'>{singleStore?.Social?.Address}</address>
                </li>
                <li className='text-sm !flex gap-1 mt-2'>
                  <i>
                    <AiOutlinePhone className='w-4' />
                  </i>
                  <span className='-mt-[3px]'>Telefon: <Link href={`tel:${singleStore?.Social?.Telephone}`} target='_blank' className='underline'>{singleStore?.Social?.Telephone}</Link></span>
                </li>
                <li className='text-sm !flex gap-1 mt-2'>
                  <i>
                    <FaRegEnvelope className='w-4' />
                  </i>
                  <span className='-mt-[3px]'>Email: <Link href={`mailto:${singleStore?.Social?.Website}`} target='_blank' className='underline'>{singleStore?.Social?.Email}</Link></span>
                </li>
                <li className='text-sm !flex gap-1 mt-2'>
                  <i>
                    <TbWorldWww className='w-4' />
                  </i>
                  <span className='-mt-[3px]'>Website: <Link href={`${singleStore?.Social?.Website}`} target='_blank' className='underline'>{singleStore?.Social?.Website}</Link></span>
                </li>
                <li className='text-sm !flex gap-1 mt-2'>
                  <i>
                    <FiFacebook className='w-4' />
                  </i>
                  <span className='-mt-[3px]'>Facebook: <Link href={`https://facebook.com${singleStore?.Social?.Facebook}`} target='_blank' className='underline'>{singleStore?.Social?.Facebook}</Link></span>
                </li>
              </ul>
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
            <div className='mt-[30px]'>
              <h3 className='text-xl text-dark font-semibold mb-5 '>Table of contents</h3>
              <ul className='text-sm text-dark flex flex-col gap-1.5'>
                <li>Nike Promo Codes and Coupons Feb 2025</li>
                <li>Every way to save at Nike</li>
                <li>The Best Nike promo code is 'ATHLETE1'</li>
                <li>About Nike</li>
                <li>Frequently asked questions about Nike</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div className='mt-16 mb-10'>
        <Breadcrumb path={breadcrumbPath} />
      </div>

    </section>
  )
}

export default Store



const categories = [
  { label: "Fashion", href: "/fashion" },
  { label: "Shoes", href: "/shoes" },
  { label: "T-shirts", href: "/t-shirts" },
  { label: "pants", href: "/pants" },
  { label: "Accessories", href: "/accessories" },
]