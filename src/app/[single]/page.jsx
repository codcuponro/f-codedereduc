import React from 'react'
import {getCurrentMonthYear} from '@/utils';
import { getSingleCategory, getSingleStore } from "../../services"
import { notFound } from 'next/navigation';
import SingleCategoryTemp from "@/templates/single-page/single-category"
import CouponSingle from "@/templates/single-page/coupon-single"

export async function generateMetadata({ params }) {
  const param = await params.single
  const singleStore = await getSingleStore({
    slug: param,
  })
  const name = param.replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

    if(singleStore){
      return {
        title: `Code promo ${name} ${getCurrentMonthYear()} | CodedeReduc`,
        description: `Codes de réduction ${name}, vouchers et offres soigneusement sélectionnés et vérifiés par l’équipe CodedeReduc.`,
        openGraph: {
          images: [
            {
              url: "https://codedereduc.nyc3.digitaloceanspaces.com/f98c281be600e40254e4b5755891c682.webp" || "../../public/og-image.webp",
              width: 1200,
              height: 630
            },
          ],
        },
        alternates: {
          canonical: `https://www.codedereduc.fr/${param}`,
        },
      }
    }else{
      return {
        title: `Code promo ${name} | CodedeReduc`,
        description: `Code promo ${name}, coupon ${name} | CodedeReduc`,
        openGraph: {
          images: [
            {
              url: "https://codedereduc.nyc3.digitaloceanspaces.com/f98c281be600e40254e4b5755891c682.webp" || "../../public/og-image.webp",
              width: 1200,
              height: 630
            },
          ],
        },
        alternates: {
          canonical: `https://www.codedereduc.fr/${param}`,
        },
      }
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
    return (
      <CouponSingle singleStore={singleStore} param={param}/>
    )
  }

  if (category){
    return <SingleCategoryTemp category={category} params={param}/>
  }

  if (!singleStore) {
    notFound();
  }


}

export default Store




