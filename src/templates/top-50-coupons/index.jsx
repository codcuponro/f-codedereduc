import React, { memo } from 'react';
import PopularSearch from '../stores/popular-search';
import Breadcrumb from '@/components/breadcrumb';
import CategoryButton from '@/components/card/category-button';
import CouponsList from './couponsList'

const breadcrumbPath = [
    { label: 'Top Coduri Reducere', href: '/top-coduri-reducere' }
];
// Memoized Category Button List
const CategoryList = memo(({ categories }) => (
    <div className='flex flex-wrap gap-2.5 mt-2.5'>
        {categories?.map((item, idx) => (
            <CategoryButton key={idx} data={item} small />
        ))}
    </div>
));

const currentMonth = new Date().toLocaleString('ro-RO', { month: 'short', year: 'numeric' });

const Top50Coupons = ({ activeCoupon, categories }) => {
    return (
        <>
            <section className='container mx-auto px-4 lg:px-0 mt-5 md:mb-[50px]'>
                {/* Header Section */}
                <div className='flex flex-col sm:flex-row items-start gap-[30px]'>
                    <div className='max-w-[634px]'>
                        <h2 className='text-dark font-semibold leading-9 mb-3 text-[28px]'>
                            Top Coduri si Vouchere Reducere  <span className='capitalize'>{currentMonth}</span>
                        </h2>
                        <p>Save up to 50% off at your favorite stores with the best deals curated by the CodCupon team.</p>
                    </div>
                </div>
                
                
                {/* Coupons & Sidebar Section */}
                <div className='mt-[30px] flex flex-col lg:flex-row gap-[50px]'>
                    <CouponsList activeCoupon={activeCoupon}/>

                    {/* Sidebar */}
                    <aside className='lg:w-[286px]'>
                        <h3 className='text-xl text-dark font-semibold mb-5'>Categorii</h3>
                        <CategoryList categories={categories} />
                        <PopularSearch />
                    </aside>
                </div>

                {/* Breadcrumb */}
                <div className='mt-16 mb-10'>
                    <Breadcrumb path={breadcrumbPath} />
                </div>
            </section>
        </>
    )
}

export default Top50Coupons