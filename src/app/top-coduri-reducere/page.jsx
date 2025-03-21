import React, { memo } from 'react';
import Breadcrumb from '@/components/breadcrumb';
import CategoryButton from '@/components/card/category-button';
import CouponList from '@/components/card/coupon-list';
import Faqs from '@/components/faqs/faqs';
import { getActiveAndDisabledCoupons } from '@/utils';
import { getAllCategories, getFavorites50Coupon } from '@/services';

const breadcrumbPath = [
  { label: 'Top 50 coupons and deals', href: '/top-coduri-reducere' }
];

// Memoized Category Button List
const CategoryList = memo(({ categories }) => (
  <div className='flex flex-wrap gap-2.5 mt-2.5'>
    {categories?.map((item, idx) => (
      <CategoryButton key={idx} data={item} small />
    ))}
  </div>
));

const PopularSearches = memo(() => (
  <div className='mt-[30px]'>
    <h3 className='text-xl text-dark font-semibold mb-5'>Cautari populare</h3>
    <ul className='text-sm text-dark flex flex-col gap-1.5'>
      {[
        'Cod reducere carVertical',
        'Cod reducere Answear',
        'Cod reducere ePantofi',
        'Cod reducere Fashion Days',
        'Cod reducere Footshop',
        'Cod reducere Modivo',
        'Voucher Flanco'
      ].map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
));

const Top50CouponsAndDeals = async (props) => {
  const params = props?.params?.locale
  const favoritesCoupon = await getFavorites50Coupon(params);
  const categories = await getAllCategories(params)
  // const categories = getUniqueCategories(favoritesCoupon);
  const {activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(favoritesCoupon)
  const currentMonth = new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' });

  return (
    <section className='container mx-auto px-4 lg:px-0 mt-5 md:mb-[50px]'>
      {/* Header Section */}
      <div className='flex flex-col sm:flex-row items-start gap-[30px]'>
        <div className='max-w-[634px]'>
          <h2 className='text-dark font-semibold leading-9 mb-3 text-[28px]'>
            Top 50 Coupons and Deals - {currentMonth}
          </h2>
          <p>Save up to 50% off at your favorite stores with the best deals curated by the CodCupon team.</p>
        </div>
      </div>

      {/* Coupons & Sidebar Section */}
      <div className='mt-[30px] flex flex-col lg:flex-row gap-[50px]'>
        <div className='flex-1'>
          {/* Coupon List */}
          <div className='flex flex-col gap-[25px] mb-20'>
            {activeCoupon?.map((item, idx) => (
              <CouponList key={idx} item={item} logo />
            ))}
          </div>
          <Faqs name={activeCoupon?.[0]?.store?.Name} />
        </div>

        {/* Sidebar */}
        <aside className='lg:w-[286px]'>
          <h3 className='text-xl text-dark font-semibold mb-5'>Categorii</h3>
          <CategoryList categories={categories} />
          <PopularSearches />
        </aside>
      </div>

      {/* Breadcrumb */}
      <div className='mt-16 mb-10'>
        <Breadcrumb path={breadcrumbPath} />
      </div>
    </section>
  );
};

export default Top50CouponsAndDeals;
