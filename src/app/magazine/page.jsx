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
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://codcupon.ro/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "magazine",
          "item": "https://codcupon.ro/magazine"
        }
      ]
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