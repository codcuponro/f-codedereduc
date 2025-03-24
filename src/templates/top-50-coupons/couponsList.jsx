"use client"
import React, { useMemo, useState } from 'react'
import CouponList from '@/components/card/coupon-list';
import { Pagination } from '@mui/material';

const CouponsList = ({activeCoupon}) => {

    const [page, setPage] = useState(1);
    const itemsPerPage = 1;

    const totalCoupons = activeCoupon?.length || 0;
    const totalPages = Math.ceil(totalCoupons / itemsPerPage);

    const paginatedCoupons = useMemo(() => (
        activeCoupon?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    ), [activeCoupon, page, itemsPerPage]);


    return (
        <>
            <div className='flex-1'>
                {/* Coupon List */}
                <div className='flex flex-col gap-[25px] mb-20'>
                    {paginatedCoupons?.map((item, idx) => (
                        <CouponList key={idx} item={item} logo />
                    ))}
                </div>

                {/* Pagination */}
                {totalCoupons > itemsPerPage && (
                    <div className="flex justify-start">
                        <Pagination
                            count={totalPages}
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
                    </div>
                )}
            </div>
        </>
    )
}

export default CouponsList