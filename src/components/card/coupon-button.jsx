"use client"
import { useModal } from '@/hooks/useModal';
import React from 'react'
import CouponModel from '../model/coupon-model';

const CouponButton = (props) => {
    const { label, title, disabled, data } = props
    const { openModal, ModalComponent } = useModal();

    function truncateText(text) {
        return text?.length > 3 ? text.slice(0, 3) + "..." : text;
    }

    const handleRoute = () => {
        if (!label) {
          window.open(data.CouponUrl || "#", "_blank");
        } else {
          window.open(data.CouponUrl || "#", "_blank");
          openModal(<CouponModel data={data} />);
        }
      };
      

    return (
        <>
            <div className='relative' >
                <button onClick={handleRoute}
                    className={`h-[50px] group flex sm:min-w-[170px] text-pure justify-center z-[2] border-[2px] relative text-center items-center p-[8.5px] px-3 mt-3 rounded-[6px] flex-col w-full
                        ${disabled ? 'bg-[#505050] border-[#505050]' : `hover:bg-white bg-[#0BC157] hover:text-[#0BC157] border-[#00A142]`}
                    `}>
                    {label && <span className={`text-[10px] ${disabled && "group-hover:!text-pure"}`}>{label}</span>}
                    <span className={`text-xl text-nowrap font-bold uppercase leading-6 `}>
                        {label ? truncateText(title) : "get the deal"}
                    </span>
                </button>
                <div className={`absolute inset-0 -ml-1 mt-1.5 mr-1.5 -mb-1 rounded-[6px] z-1 
                    ${disabled ? 'bg-dark' : "bg-[#00A142]"}
                `} />
            </div>
            <ModalComponent />
        </>
    )
}

export default CouponButton