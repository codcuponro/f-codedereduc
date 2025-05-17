import CategoriesTemp from '@/templates/categories'
import React from 'react'
import {getAllCategories} from "../../services"

export const metadata = {
  alternates: {
    canonical: `https://www.codedereduc.fr/categories`,
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
      "item": `https://codedereduc.fr/categories/${item?.Slug}`
    }
  })

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "codedereduc",
      "url": "https://codedereduc.fr/",
      "logo": "https://www.codedereduc.fr/logo.svg",
      "sameAs": "https://codedereduc.fr/Contact"
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