"use client"
import Breadcrumb from '@/components/breadcrumb'
import CouponList from '@/components/card/coupon-list'
import Faqs from '@/components/faqs/faqs'
import { Link, Pagination } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const CategorySingleTemp = ({ params, data, categories }) => {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const breadcrumbPath = [
        {
            label: 'categories',
            href: '/categories'
        },
        {
            label: params?.replace(/-/g, ' '),
            href: `/${params}`
        }
    ]

    // Calculate paginated data
    const totalCoupons = data?.coupons_and_deals?.length || 0;
    const paginatedCoupons = data?.coupons_and_deals?.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <>
            <section className='container mx-auto px-4 lg:px-0 mt-5 md:mb-[50px]'>
                <div className='flex flex-col sm:flex-row items-start gap-[30px]'>
                    <div className='max-w-[634px]'>
                        <h2 className='text-dark font-semibold leading-9 mb-3 text-[28px] capitalize'>{params?.replace(/-/g, ' ')}</h2>
                        <p>{data?.Excerpt}</p>
                    </div>
                </div>

                <div className='mt-[30px]'>
                    <div className='flex flex-col lg:flex-row gap-[50px]'>
                        <div className='flex-1'>
                            <div className='flex flex-col gap-[25px]'>
                                {paginatedCoupons?.map((item, idx) => (
                                    <CouponList key={idx} item={item} logo />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className='flex justify-center py-[50px]'>
                                {totalCoupons > itemsPerPage &&
                                    <Pagination
                                        count={Math.ceil(totalCoupons / itemsPerPage)}
                                        page={page}
                                        onChange={(_, newPage) => setPage(newPage)}
                                        variant="outlined"
                                        shape="rounded"
                                        sx={{
                                            "& .MuiPaginationItem-root": {
                                                color: "#637381",
                                                borderColor: "#DFE4EA",
                                                width: "34px",
                                                height: "34px",
                                                minWidth: "34px",
                                                borderRadius: "6px",
                                            },
                                            "& .MuiPaginationItem-root:hover": {
                                                backgroundColor: "#6D28D9",
                                                color: "#fff",
                                            },
                                            "& .MuiPaginationItem-root.Mui-selected": {
                                                backgroundColor: "#6D28D9",
                                                color: "#fff",
                                                borderColor: "#6D28D9",
                                            },
                                            "& .MuiPaginationItem-root.Mui-selected:hover": {
                                                backgroundColor: "#0056b3",
                                            },
                                        }}
                                    />
                                }
                            </div>
                            <Faqs name={data?.Name} />
                        </div>

                        <aside className='w-[286px]'>
                            <h3 className='text-xl text-dark font-semibold mb-5'>Categories</h3>
                            <div className='flex flex-wrap gap-2.5 mt-2.5'>
                                {categories?.map((item, idx) => (
                                    <Link href={`/categories/${item?.Slug}` || "#"} key={idx} className='!no-underline' style={{ textDecoration: "none !important" }}>
                                        <button
                                            className={`font-medium flex text-sm sm:text-base items-center rounded-full px-2.5 py-[3px] gap-[3px] 
                                                ${item?.Slug === params
                                                    ? "bg-[#6D28D9] text-white"
                                                    : "hover:bg-[#6D28D9] bg-[#E9EDF4] text-[#637381] hover:text-white"
                                                }`}
                                            onMouseEnter={() => setHoveredIdx(idx)}
                                            onMouseLeave={() => setHoveredIdx(null)}
                                        >
                                            {params === item?.Slug ? (
                                                <Image src="/svg/category.svg" alt="" width={15} height={15} className="w-[15px]" />
                                            ) : (
                                                <Image
                                                    src={hoveredIdx === idx ? "/svg/category.svg" : "/svg/category2.svg"}
                                                    alt=""
                                                    width={15}
                                                    height={15}
                                                    className="w-[15px]"
                                                />
                                            )}
                                            {item?.Name}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            <div className='mt-[30px]'>
                                <p>{data?.Short_Info}</p>
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

export default CategorySingleTemp;
