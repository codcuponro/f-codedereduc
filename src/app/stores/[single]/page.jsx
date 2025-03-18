import Link from 'next/link'
import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import { formatDate, getActiveAndDisabledCoupons, getCurrentMonthYear, getUniqueCategories } from '@/utils';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getSingleStore } from "../../../services"
import dynamic from 'next/dynamic';
import TOC from "../../../templates/stores/toc"
import IconImage from "../../../components/icon-image"

const CouponList = dynamic(() => import('@/components/card/coupon-list'), { ssr: false });
const CategoryButton = dynamic(() => import('@/components/card/category-button'), { ssr: false });
const Faqs = dynamic(() => import('@/components/faqs/faqs'), { ssr: false });
const Breadcrumb = dynamic(() => import('@/components/breadcrumb'), { ssr: false });
const Rating = dynamic(() => import('@/components/rating'), { ssr: false });

const Store = async ({ params }) => {
  const param = await params.single
  const locale = await params.locale

  const singleStore = await getSingleStore({
    slug: param,
    locale,
  })
  const {activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(singleStore?.coupons_and_deals)
  
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
        <IconImage singleStore={singleStore}/>
        <div className='max-w-[70%]'>
          <h1 className='text-dark font-semibold text-xl md:text-[28px]'>Coupons {singleStore?.Name} {getCurrentMonthYear()}</h1>
          <p>{singleStore?.Excerpt}</p>
          <Rating totalRating={singleStore?.Rating} />
          <p className='text-xs font-medium mt-2.5'>Ultima actualizare de <span className='underline'>Alina Simion</span> la {formatDate(singleStore?.updatedAt)}</p>
        </div>
      </div>

      <div className='mt-[30px]'>
        {
          activeCoupon?.length > 0 && <h2 className='text-xl text-dark font-semibold mb-5'>{activeCoupon?.length} Coduri Reducere si Oferte Active</h2>
        }
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
            {
              disableCoupon?.length > 0 && <>
                <h3 className={`text-xl text-dark font-semibold mb-5 ${activeCoupon?.length > 0 && "mt-10"}`}>{disableCoupon?.length} Coduri Reducere si Oferte Expirate</h3>
                <div className='flex flex-col gap-[25px]'>
                  {
                    disableCoupon?.map((item, idx) => (
                      <CouponList key={idx} disabled item={item} />
                    ))
                  }
                </div>
              </>
            }

            <div className='single_store_content mt-10'>
              {
                singleStore &&
                <BlocksRenderer content={singleStore?.Content} />
              }
            </div>

            <Faqs name={singleStore?.Name} />
          </div>

          <aside className='w-[286px]'>
            <p className='text-xl text-dark font-semibold mb-5 '>Categorii</p>
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
              <h3 className='text-xl text-dark font-semibold mb-5 '>Cautari populare</h3>
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
            <TOC />
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
