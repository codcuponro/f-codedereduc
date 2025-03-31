"use client"
import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Faqs = ({name, coupon, allCoupon}) => {
    const [openFaq, setOpenFaq] = useState(null)
    const currentYear = new Date().getFullYear();

    const latesCoupon = allCoupon.filter((item)=>item.CouponsType === 'Coupon Code')
    const aTitles = latesCoupon.map((item) => item.CouponCode);
    const aDiscountValue = latesCoupon.map((item) => item.DiscountValue);
    
    const latesCouponNA = coupon.filter((item)=>item.CouponsType === 'Coupon Code')
    const Titles = latesCouponNA.map((item) => item.CouponCode);
    const DiscountValue = latesCouponNA.map((item) => item.DiscountValue);

    const handleFaq = (idx) => {
        if (openFaq === idx) {
            return setOpenFaq(null)
        }
        setOpenFaq(idx)
    }

    const faqsList = [
        {
            question:  `Cate vouchere si oferte sunt disponibile pentru ${name}?`,
            answer: `In acest moment, sunt active ${coupon?.length} vouchere si oferte pe care le puteti folosi pe site-ul celor de la ${name}.`
        },
        {
            question: `Cum folosesc codul de reducere ${name}?`,
            answer: `Pentru a folosi codul de reducere ${name}, adauga produsele dorite in cos, apoi apasa pe cosul de cumparaturi sau butonul de checkout. Copiaza codul de reducere din aceasta pagina si adauga-l in campul Cod promotional si apasa pe butonul Aplica.`
        },
        {
            question: `De ce codul de reducere ${name} nu functioneaza?`,
            answer: `De regula, pe <a href="/">CodCupon.ro</a> veti gasi doar coduri de reducere active, insa in cazul in care comerciantul a dezactivat acest cod, el nu va functiona. `
        },
        {
            question: `Cand o sa fie ${name} Black Friday ${currentYear}?`,
            answer:    `In mod obisnuit, ${name} Black Friday are loc in ultima vineri din luna Noiembrie, dar aceasta nu este o regula bine definita, ${name} poate decide sa inceapa Black Friday mai devreme. Aboneaza-te la newsletetter-ul nostru si vei fi primul care va afla cand are loc ${name} Black Friday.`
        },
    ]

    if(aTitles.length > 0){
        faqsList.push(
            {
                question: `Care este ultimul voucher ${name} adaugat?  `,
                answer: `Ultimul voucher ${name} adaugat este “${ Titles[0] || aTitles[0]}”. Acesta ofera clientilor ${DiscountValue[0] || aDiscountValue[0]} reducere.`
            },
        )
    }

    return (
        <section>
            <h2 className='text-2xl text-dark font-semibold mb-5'>Intrebari frecvente {name}</h2>
            <ul className='flex flex-col gap-5'>
                {
                    faqsList?.map((item, idx) => (
                        <li key={idx} className='py-[18px] px-4 sm:px-[30px] rounded-[10px] border border-[#DEE2E6]' onClick={() => handleFaq(idx)}>
                            <h3 className='sm:text-xl cursor-pointer text-dark font-semibold flex justify-between items-center gap-3'>{item?.question}
                                {/* {openFaq === idx ? <IoIosRemoveCircleOutline size={23} className='text-primary' /> : <AiOutlinePlusCircle size={23} className='text-primary' />} */}
                            </h3>
                            <div className='mt-5 text-dark faqs' dangerouslySetInnerHTML={{__html : item?.answer}}></div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Faqs


