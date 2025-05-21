import Link from 'next/link'
import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import { formatDate, getActiveAndDisabledCoupons, getCurrentMonthYear, getSortedData, getUniqueCategories } from '@/utils';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import TOC from "../../templates/stores/toc"
import IconImage from "../../components/icon-image"
import PopularSearch from "../../templates/stores/popular-search"

import CouponList from '@/components/card/coupon-list'
import CategoryButton from '@/components/card/category-button'
import Faqs from '@/components/faqs/faqs'
import Breadcrumb from '@/components/breadcrumb'
import Rating from '@/components/rating'


const CouponSingle = async ({singleStore, param}) => {

    const { activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(singleStore?.coupons_and_deals)
    
    const sortedCoupon = getSortedData(activeCoupon)
    const dateLateUpdate = formatDate(sortedCoupon[0].publishedAt)
    const categories = getUniqueCategories(singleStore?.coupons_and_deals)
    const currentYear = new Date().getFullYear();

    const breadcrumbPath = [
      {
        label: 'Magasins',
        href: '/magasins'
      },
      {
        label: param?.replace(/-/g, ' '),
        href: `/${param}`
      }
    ]

    const faqsList = [
      {
          question:  `Combien de bons et d’offres sont disponibles pour ${singleStore?.Name}?`,
          answer: `Actuellement, ${activeCoupon?.length} codes promo et offres sont disponibles et utilisables sur le site de ${singleStore?.Name}.`
      },
      {
          question: `Comment utiliser le code de réduction ${singleStore?.Name}?`,
          answer: `Pour utiliser le code de réduction ${singleStore?.Name}, il suffit d’ajouter les produits souhaités à votre panier, d’accéder à la page de paiement, puis de copier et coller le code dans le champ prévu à cet effet avant de l’appliquer. Cette procédure garantit que la remise est bien déduite de votre total.`
      },
      {
          question: `Pourquoi le code de réduction ${singleStore?.Name} ne fonctionne-t-il pas ?`,
          answer: ` En règle générale, sur <a href="/">CodedeReduc.fr</a>, vous ne trouverez que des codes de réduction actifs ; cependant, si le commerçant a désactivé un code, celui-ci ne fonctionnera pas. `
      },
      {
          question: `Quand aura lieu le Black Friday ${currentYear} chez ${singleStore?.Name} ?`,
          answer:    `« En général, le Black Friday de ${singleStore?.Name} a lieu le dernier vendredi du mois de novembre, mais ce n’est pas une règle gravée dans le marbre : ${singleStore?.Name} peut choisir de lancer son Black Friday plus tôt. Abonnez-vous à notre newsletter pour être les premiers informés de la date du Black Friday de ${singleStore?.Name}. »`
      },
  ]

    const events = activeCoupon?.map((item) => {
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": item?.Title,
        "startDate": "2025-11-29T09:00:00+02:00",
        "endDate": "2025-11-30T23:59:00+02:00",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://codedereduc.fr/"
        },
        "image": [
          singleStore?.Icon?.url
        ],
        "description": item?.Title,
        "organizer": {
          "@type": "Organization",
          "name": "codedereduc",
          "url": "https://codedereduc.ro"
        },
        "performer": {
          "@type": "Organization",
          "name": singleStore?.Name
        },
        "offers": {
          "@type": "Offer",
          "url": `https://codedereduc.fr/${singleStore?.Slug}`,
          "price": "0",
          "priceCurrency": "RON",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-11-29T09:00"
        }
      }
    })

    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://codedereduc.fr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "magazine",
            "item": "https://codedereduc.fr/magasins"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": singleStore?.Name,
            "item": `https://codedereduc.fr/${singleStore?.Slug}`
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": singleStore?.Name,
        "description": singleStore?.Excerpt,
        "brand": {
          "@type": "Organization",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": singleStore?.Rating || 5,
          "reviewCount": 187
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Coupons and Offers",
          "itemListElement": singleStore?.coupons_and_deals?.map(coupon => ({
            "@type": "Offer",
            "name": singleStore?.Name,
            "description": coupon.Title,
            "url": `https://www.codedereduc.fr/${singleStore?.Slug}`,
            "priceCurrency": "RON",
            "price": "0",
            "availability": "https://schema.org/InStock",
            "validThrough": "2025-12-31"
          }))
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsList.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]

    if (events?.length) {
      jsonLd.push(...events);
    }

    

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section className='container mx-auto px-4 lg:px-0 pt-5 mb:py-[50px]'>
          <div className='flex flex-row items-start gap-2 sm:gap-[30px]'>
            <IconImage singleStore={singleStore} />
            <div className='max-w-[70%]'>
              <h1 className='text-dark font-semibold text-xl md:text-[28px]'>Code promo {singleStore?.Name} <span className='capitalize'>{getCurrentMonthYear()}</span></h1>

              {/* <p>{singleStore?.Excerpt}</p> */}
              <p className='mt-[10px] font-medium'>Ici, vous trouverez les tout derniers codes de réduction {singleStore?.Name}, vouchers et offres soigneusement sélectionnés et vérifiés par l’équipe CodedeReduc.</p>
              <Rating totalRating={singleStore?.Rating} />
              <p className='text-xs font-medium mt-2.5'> Dernière mise à jour par <Link href="/despre-noi" className='underline'>{singleStore?.author?.Name}</Link> le <span className='capitalize'>{dateLateUpdate}</span></p>
            </div>
          </div>

          <div className='mt-[30px]'>
            {
              activeCoupon?.length > 0 && <h2 className='text-xl text-dark font-semibold mb-5'>{activeCoupon?.length} codes de réduction et offres actives</h2>
            }
            <div className='flex flex-col lg:flex-row gap-[50px]'>
              <div className='flex-1'>
                <div className='flex flex-col gap-[25px]'>
                  {
                    activeCoupon?.length > 0 &&
                    sortedCoupon?.map((item, idx) => (
                      <CouponList key={idx} item={item} />
                    ))
                  }
                </div>
                {
                  disableCoupon?.length > 0 && <>
                    <h3 className={`text-xl text-dark font-semibold mb-5 ${activeCoupon?.length > 0 && "mt-10"}`}>{disableCoupon?.length} codes promo et offres expirées</h3>
                    <div className='flex flex-col gap-[25px]'>
                      {
                        disableCoupon?.map((item, idx) => (
                          <CouponList key={idx} disabled item={item} />
                        ))
                      }
                    </div>
                  </>
                }

                <div className='single_store_content mt-10'>
                  {
                    singleStore &&
                    <BlocksRenderer content={singleStore?.Content} />
                  }
                </div>

                <Faqs name={singleStore?.Name} coupon={activeCoupon} allCoupon={singleStore?.coupons_and_deals} />
              </div>

              <aside className='w-[286px]'>
                <p className='text-xl text-dark font-semibold mb-5 '>Catégories</p>
                <div
                  style={{ marginTop: '10px' }}
                  className='flex flex-wrap gap-2.5'
                >
                  {
                    categories?.map((item, idx) => (
                      <CategoryButton key={idx} data={item} small />
                    ))
                  }
                </div>
                <div className='mt-[30px]'>
                  <h3 className='text-xl text-dark font-semibold mb-5 '>Contact</h3>
                  <ul>
                    {
                      singleStore?.Social?.Address &&
                      <li className='text-sm !flex gap-1'>
                        <i>
                          <LuMapPin className='w-4' />
                        </i>
                        <address className='-mt-1'>{singleStore?.Social?.Address}</address>
                      </li>
                    }

                    {
                      singleStore?.Social?.Telephone &&
                      <li className='text-sm !flex gap-1 mt-2'>
                        <i>
                          <AiOutlinePhone className='w-4' />
                        </i>
                        <span className='-mt-[3px]'>Telefon: <a href={`tel:${singleStore?.Social?.Telephone}`} target='_blank' className='underline'>{singleStore?.Social?.Telephone}</a></span>
                      </li>
                    }
                    {
                      singleStore?.Social?.Email &&
                      <li className='text-sm !flex gap-1 mt-2'>
                        <i>
                          <FaRegEnvelope className='w-4' />
                        </i>
                        <span className='-mt-[3px]'>Email: <a href={`mailto:${singleStore?.Social?.Email}`} target='_blank' className='underline'>{singleStore?.Social?.Email}</a></span>
                      </li>
                    }
                    {
                      singleStore?.Social?.Website &&
                      <li className='text-sm !flex gap-1 mt-2'>
                        <i>
                          <TbWorldWww className='w-4' />
                        </i>
                        <span className='-mt-[3px]'>Website: <a href={`https://${singleStore?.Social?.Website}`} target='_blank' className='underline'>{singleStore?.Social?.Website}</a></span>
                      </li>
                    }
                    {
                      singleStore?.Social?.Facebook &&
                      <li className='text-sm !flex gap-1 mt-2'>
                        <i>
                          <FiFacebook className='w-4' />
                        </i>
                        <span className='-mt-[3px]'>Facebook: <a href={`https://facebook.com${singleStore?.Social?.Facebook}`} target='_blank' className='underline'>{singleStore?.Social?.Facebook}</a></span>
                      </li>
                    }
                  </ul>
                </div>
                <PopularSearch />
                <TOC />
              </aside>
            </div>
          </div>
          <div className='mt-16 pb-10'>
            <Breadcrumb path={breadcrumbPath} />
          </div>
        </section>
      </>
    )
}

export default CouponSingle