import LandingPageSlider from "@/components/main/landing-page-slider";
import { getHomPage } from "@/services";
import { Request } from "@/services/Request";
import CouponsAndDeals from "@/templates/home-page/coupons-and-deals";
import FavoritesCoupons from "@/templates/home-page/favorites-coupons";
import FavoriteStores from "@/templates/home-page/favorites-stores";
import HowItWorks from "@/templates/home-page/how-it-works";
import TopCategories from "@/templates/home-page/top-categories";
import qs from "qs"

async function getData() {

  // Stores 
  const sparams = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals",
    ],
    filters: {
      Favorit: {
        $eq: true
      }
    },
    pagination: {
      limit: 10
    }
  })
  const stores = await Request(`/stores?${sparams}`);

  // Categories 
  const cparams = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store"
    ],
    filters: {
      Top: {
        $eq: true
      }
    },
    pagination: {
      limit: 25
    }
  })
  const categories = await Request(`/categories?${cparams}`);

  // Coupon & Deals
  const cdparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon"
    ],
    pagination: {
      limit: 15
    }
  })
  const couponAndDeals = await Request(`/coupons-and-deals?${cdparams}`);


  // Favorites Coupon
  const fcdparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon"
    ],
    filters: {
      FavoritesCoupon: {
        $eq: true
      }
    },
    pagination: {
      limit: 10
    }
  })
  const favoritesCoupon = await Request(`/coupons-and-deals?${fcdparams}`);


  const exparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "Feature_image"
    ],
    filters: {
      ExclusiveCoupon: {
        $eq: true
      }
    },
    pagination: {
      limit: 6
    }
  })
  const exParamsCoupon = await Request(`/coupons-and-deals?${exparams}`);
  
  const pageParams = qs.stringify({
    populate: [
      'HowItswork.Icon'
    ],
  })
  const pageRes = await Request(`/home-page?${pageParams}`);

  return {
    stores: stores?.data,
    couponAndDeals: couponAndDeals?.data,
    favoritesCoupon: favoritesCoupon?.data,
    categories: categories?.data,
    exclusiveCoupon: exParamsCoupon?.data,
    pageData: pageRes?.data
  }
}

export default async function Home() {
  
  const pageData = await getHomPage()

  const {
    stores,
    categories,
    couponAndDeals,
    favoritesCoupon,
    exclusiveCoupon,
  } = await getData()

  return (
    <>
      <LandingPageSlider data={exclusiveCoupon}/>
      <FavoritesCoupons data={favoritesCoupon} />
      <FavoriteStores data={stores}/>
      <CouponsAndDeals data={couponAndDeals}/>
      <TopCategories data={categories}/>
      <HowItWorks data={pageData}/>
    </>
  );
}
