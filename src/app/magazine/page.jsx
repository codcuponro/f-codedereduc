import StoresTemp from '@/templates/stores'
import React from 'react'
import { getAllStore, getStores } from "../../services"

export const metadata = {
  alternates: {
    canonical: `https://www.codedereduc.ro/magazine`,
  }
}


const Store = async (props) => {
  const params = props?.params?.locale
  const [
    stores,
    favStores,
  ] = await Promise.all([
    getAllStore(params),
    getStores(params),
  ]);

  const itemList = stores?.map((item,idx) => {
    return {
      "@type": "ListItem",
      "position": idx+1,
      "name": item?.Name || "",
      "item": `https://codedereduc.ro/magazine/${item?.Slug}`
    }
  })

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "codedereduc",
      "url": "https://codedereduc.ro/",
      "logo": "https://www.codedereduc.ro/logo.svg",
      "sameAs": "https://codedereduc.ro/Contact"
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "itemListElement": JSON.stringify(itemList)
    },
  ]

  return (
    <>
      <StoresTemp stores={stores} favStores={favStores} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default Store