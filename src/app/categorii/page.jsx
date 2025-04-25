import CategoriesTemp from '@/templates/categories'
import React from 'react'
import {getAllCategories} from "../../services"

export const metadata = {
  alternates: {
    canonical: `https://www.codcupon.ro/categorii`,
  }
}

const Categories = async (props) => {
  const params = props?.params?.locale
  const categoriesData = await getAllCategories(params)

  const itemList = categoriesData?.map((item,idx) => {
    return {
      "@type": "ListItem",
      "position": idx+1,
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
      <CategoriesTemp data={categoriesData}/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default Categories