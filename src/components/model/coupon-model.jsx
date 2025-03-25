import { constData } from '@/const';
import useToast from '@/hooks/useToast';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CouponModel = ({ data }) => {
    const [copied, setCopied] = useState(false);
    const showToast = useToast();
    const couponCode = data?.CouponCode;
    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        showToast("Coupon Code Copied!", "success");
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-2'>
                <Image src={data?.Icon?.url || data?.store?.Icon?.url || "/images/fallback.png"} alt='Coupon Icon' width={105} height={105} className='rounded-lg border' />
                <h5 className='font-semibold text-[22px]'>{data?.Title}</h5>
            </div>
            <div className='flex lg:flex-row flex-col gap-4 items-start mt-8'>
                <button
                    className='text-primary h-full bg-[#F5F5F5] w-full border border-[#DEE2E6] font-bold text-2xl py-[13px] px-[12px] flex-1 rounded-[6px] cursor-default'
                >
                    {couponCode}
                </button>
                <button
                    className='w-full -mt-3 flex-1 group'
                    onClick={() => handleCopy(couponCode)}
                >
                    <div className='relative z-[-1]'>
                        <button className='h-[60px] flex justify-center z-[2] relative text-center items-center p-[8.5px] px-3 mt-3 rounded-[6px] flex-col w-full bg-[#0BC157] border-[2px] border-[#00A142] group-hover:bg-white'>
                            <span className='text-[10px] text-pure group-hover:text-[#00A142]'>{copied ? "Copiaza din nou" : "Faceți clic pentru a copia"}</span>
                            <span className='text-xl text-white uppercase font-bold leading-6 group-hover:text-[#00A142]'>
                                {copied ? "Cod copiat" : constData?.copy_code}
                            </span>
                        </button>
                        <div className='absolute bg-[#00A142] inset-0 -ml-1 mt-1.5 mr-1.5 -mb-1 rounded-[6px] z-1' />
                    </div>
                </button>
            </div>
            <p className='font-medium text-sm text-center mt-8'>
                Continua la {data?.store?.Social?.Website && <Link href={`https://${data?.store?.Social?.Website}`} target='_blank' className="text-primary underline">{data?.store?.Social?.Website}</Link>}
            </p>
        </div>
    );
}

export default CouponModel
