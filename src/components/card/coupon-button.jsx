"use client"
import { useModal } from '@/hooks/useModal';
import React from 'react'
import CouponModel from '../model/coupon-model';

const CouponButton = (props) => {
    const { label, title, disabled, data, green } = props
    const { openModal, ModalComponent } = useModal();

    function truncateText(text) {
        return text?.length > 3 ? text.slice(0, 3) + "..." : text;
    }

    const handleRoute = () => {
        !label ?
            window.open(data.CouponUrl || "#", "_blank")
            :
            window.open(data.CouponUrl || "#", "_blank")
            openModal(<CouponModel data={data} />)
    };

    return (
        <>
            <div className='relative' >
                <button disabled={disabled} onClick={handleRoute}
                    className={`h-[50px] group flex sm:min-w-[170px] justify-center z-[2] border-[2px] relative text-center items-center p-[8.5px] px-3 mt-3 rounded-[6px] flex-col w-full
                        ${disabled ? 'bg-[#505050] border-[#505050]' : `hover:bg-white ${green ? "bg-[#0BC157] border-[#00A142]" : "bg-[#8646F4] border-primary"}`}
                    `}>
                    {label && <span className={`text-[10px] text-pure ${!disabled && "group-hover:text-primary"}`}>{label}</span>}
                    <span className={`text-xl text-white text-nowrap font-bold uppercase leading-6 `}>
                        {label ? truncateText(title) : "get the deal"}
                    </span>
                </button>
                <div className={`absolute  inset-0 -ml-1 mt-1.5 mr-1.5 -mb-1 rounded-[6px] z-1 
                    ${disabled ? 'bg-dark' : green ? "bg-[#00A142]" : `bg-[#5B21B6]`}
                `} />
            </div>
            <ModalComponent />
        </>
    )
}

export default CouponButton