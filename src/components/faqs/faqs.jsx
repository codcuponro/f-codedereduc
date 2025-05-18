"use client"
import React, { useState } from 'react'

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
            question:  `Combien de bons et d’offres sont disponibles pour ${name}?`,
            answer: `Actuellement, ${coupon?.length} codes promo et offres sont disponibles et utilisables sur le site de ${name}.`
        },
        {
            question: `Comment utiliser le code de réduction ${name}?`,
            answer: `Pour utiliser le code de réduction ${name}, il suffit d’ajouter les produits souhaités à votre panier, d’accéder à la page de paiement, puis de copier et coller le code dans le champ prévu à cet effet avant de l’appliquer. Cette procédure garantit que la remise est bien déduite de votre total.`
        },
        {
            question: `Pourquoi le code de réduction ${name} ne fonctionne-t-il pas ?`,
            answer: ` En règle générale, sur <a href="/">CodedeReduc.fr</a>, vous ne trouverez que des codes de réduction actifs ; cependant, si le commerçant a désactivé un code, celui-ci ne fonctionnera pas. `
        },
        {
            question: `Quand aura lieu le Black Friday 2025 chez ${name} ?`,
            answer:    `« En général, le Black Friday de ${name} a lieu le dernier vendredi du mois de novembre, mais ce n’est pas une règle gravée dans le marbre : ${name} peut choisir de lancer son Black Friday plus tôt. Abonnez-vous à notre newsletter pour être les premiers informés de la date du Black Friday de ${name}. »`
        },
    ]

    if(aTitles.length > 0){
        faqsList.push(
            {
                question: `Quel est le dernier coupon ajouté pour ${name} ? `,
                answer: `Le dernier coupon ajouté pour ${name} est “${ Titles[0] || aTitles[0]}”. Celui-ci offre aux clients une réduction de  ${DiscountValue[0] || aDiscountValue[0]}.`
            },
        )
    }

    return (
        <section>
            <h2 className='text-2xl text-dark font-semibold mb-5'>Foire aux questions {name}</h2>
            <ul className='flex flex-col gap-5'>
                {
                    faqsList?.map((item, idx) => (
                        <li key={idx} className='py-[18px] px-4 sm:px-[30px] rounded-[10px] border border-[#DEE2E6]'>
                            <h3 className='sm:text-xl text-dark font-semibold flex justify-between items-center gap-3'>{item?.question}
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


