import React from 'react'
import CategorySingleTemp from "@/templates/categories/category-single"
import { getActiveAndDisabledCoupons } from '@/utils'
import { getAllCategories } from '@/services'

const SingleCategoryTemp = async ({category, params}) => {
    const { activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(category?.coupons_and_deals)
    const categories = await getAllCategories(params)
    const itemList = categories?.map((item, idx) => {
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "name": item?.Name || "",
        "item": `https://codcupon.ro/categorii/${item?.Slug}`
      }
    })

    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "codcupon",
        "url": "https://codcupon.ro/",
        "logo": "https://www.codcupon.ro/logo.svg",
        "sameAs": "https://codcupon.ro/contact"
      },
      {
        "@context": "https://schema.org",
        "@type": "Event",
        "itemListElement": JSON.stringify(itemList)
      },
    ]


    return (
      <>
        <CategorySingleTemp params={params} data={category} coupons={activeCoupon} categories={categories} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </>
    )
}

export default SingleCategoryTemp