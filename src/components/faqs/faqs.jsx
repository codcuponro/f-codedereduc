"use client"
import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Faqs = ({name}) => {
    const [openFaq, setOpenFaq] = useState(null)
    const handleFaq = (idx) => {
        if (openFaq === idx) {
            return setOpenFaq(null)
        }
        setOpenFaq(idx)
    }

    const faqsList = [
        {
            question:  `What is a ${name} discount code?+`,
            answer: "Answer"
        },
        {
            question: `How do I use ${name} discount codes?+`,
            answer: "Answer"
        },
        {
            question: `Why isn't my ${name} discount code working?+`,
            answer: "Answer"
        },
        {
            question: `How much can I save with a ${name} discount code?+`,
            answer: "Answer"
        },
        {
            question: `Is ${name} participating in the Black Friday campaign?+`,
            answer: "Answer"
        },
        {
            question: `When is Black Friday 2025 at ${name}?+`,
            answer: "Answer"
        },
    ]

    return (
        <section>
            <h2 className='text-2xl text-dark font-semibold mb-5'>Frequently asked questions about {name}</h2>
            <ul className='flex flex-col gap-5'>
                {
                    faqsList?.map((item, idx) => (
                        <li key={idx} className='py-[18px] px-4 sm:px-[30px] rounded-[10px] border border-[#DEE2E6]' onClick={() => handleFaq(idx)}>
                            <h3 className='sm:text-xl cursor-pointer text-dark font-semibold flex justify-between items-center gap-3'>{item?.question}
                                {openFaq === idx ? <IoIosRemoveCircleOutline size={23} className='text-primary' /> : <AiOutlinePlusCircle size={23} className='text-primary' />}
                            </h3>
                            {
                                openFaq === idx && <p className='mt-5 text-dark'>{item?.answer}</p>
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Faqs


