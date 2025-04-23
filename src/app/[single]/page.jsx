import React from 'react'
import {getCurrentMonthYear} from '@/utils';
import { getSingleCategory, getSingleStore } from "../../services"
import { notFound } from 'next/navigation';
import SingleCategoryTemp from "@/templates/single-page/single-category"
import CouponSingle from "@/templates/single-page/coupon-single"

export async function generateMetadata({ params }) {
  const param = await params.single
  const name = param.replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Cod reducere ${name}, Vouchere si Oferte ${getCurrentMonthYear()} - CodCupon.ro`,
    description: `Aici gasesti cele mai noi coduri de reducere ${name}, Vouchere si oferte alese cu grija si verificate de echipa CodCupon`,
    openGraph: {
      images: [
        {
          url: "https://codcupon.nyc3.digitaloceanspaces.com/f98c281be600e40254e4b5755891c682.webp" || "../../public/og-image.webp",
          width: 1200,
          height: 630
        },
      ],
    },
    alternates: {
      canonical: `https://www.codcupon.ro/${param}`,
    },
  }
}


const Store = async ({ params }) => {
  const param = await params.single
  const locale = await params.locale

  const singleStore = await getSingleStore({
    slug: param,
    locale,
  })

  const { category } = await getSingleCategory({ slug: param, locale })

  if (singleStore) {
    return <CouponSingle singleStore={singleStore} param={param}/>
  }

  if (category){
    return <SingleCategoryTemp category={category} params={param}/>
  }

  if (!singleStore) {
    notFound();
  }


}

export default Store




