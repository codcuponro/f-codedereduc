// import LandingPageSlider from "@/components/main/landing-page-slider";
import { getFavoritesCoupon, getHomPage } from "@/services";
// import CouponsAndDeals from "@/templates/home-page/coupons-and-deals";
import FavoritesCoupons from "@/templates/home-page/favorites-coupons";
import FavoriteStores from "@/templates/home-page/favorites-stores";
import HowItWorks from "@/templates/home-page/how-it-works";
// import TopCategories from "@/templates/home-page/top-categories";
import {  getStores } from "../services";



export default async function Home() {
  
  const pageData = await getHomPage()
  const stores = await getStores()
  // const categories = await getCategories()
  // const couponAndDeals = await getCouponAndDeals()
  const favoritesCoupon = await getFavoritesCoupon()
  // const exclusiveCoupon = await getExclusiveCoupon()

  return (
    <>
      {/* <LandingPageSlider data={exclusiveCoupon}/> */}
      <FavoritesCoupons data={favoritesCoupon} />
      <FavoriteStores data={stores}/>
      {/* <CouponsAndDeals data={couponAndDeals}/> */}
      {/* <TopCategories data={categories}/> */}
      <HowItWorks data={pageData}/>
    </>
  );
}
