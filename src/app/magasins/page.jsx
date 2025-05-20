import StoresTemp from '@/templates/stores'
import React from 'react'
import { getAllStore, getStores } from "../../services"

export const metadata = {
  alternates: {
    title: 'Magasins | CodedeReduc.fr',
    canonical: `https://www.codedereduc.fr/magasins`,
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
      "item": `https://codedereduc.fr/magasins/${item?.Slug}`
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
      <StoresTemp stores={stores} favStores={favStores} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default Store