import CategorySingleTemp from "@/templates/categories/category-single"
import {getAllCategories, getSingleCategory} from "../../../services"
import { getActiveAndDisabledCoupons } from "@/utils"

export async function generateMetadata({ params }) {
  const param = await params.single
  return {
    alternates: {
      canonical: `https://www.codedereduc.fr/${param}`,
    },
  }
}

const SingleCategory = async ({ params }) => {
  const param = await params.single
  const locale = await params.locale
  const { category } = await getSingleCategory({slug:param, locale})
  const {activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(category?.coupons_and_deals)
  const categories = await getAllCategories(params)
  

  const itemList = categories?.map((item,idx) => {
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
      <CategorySingleTemp params={param} data={category} coupons={activeCoupon} categories={categories} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default SingleCategory