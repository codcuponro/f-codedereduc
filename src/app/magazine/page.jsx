import StoresTemp from '@/templates/stores'
import React from 'react'
import { getAllStore, getStores } from "../../services"

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
      "item": `https://codcupon.ro/magazine/${item?.Slug}`
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
      <StoresTemp stores={stores} favStores={favStores} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default Store