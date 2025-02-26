import LandingPageSlider from "@/components/main/landing-page-slider";
import { getCategories, getCouponAndDeals, getExclusiveCoupon, getFavoritesCoupon, getHomPage, getStores } from "@/services";
import CouponsAndDeals from "@/templates/home-page/coupons-and-deals";
import FavoritesCoupons from "@/templates/home-page/favorites-coupons";
import FavoriteStores from "@/templates/home-page/favorites-stores";
import HowItWorks from "@/templates/home-page/how-it-works";
import TopCategories from "@/templates/home-page/top-categories";

export default async function Home() {
  
  const [favoritesCoupon,
    exclusiveCoupon,
    favStores,
    couponsAndDeals,
    categories,
    homePage] = await Promise.all([
      getFavoritesCoupon(),
      getExclusiveCoupon(),
      getStores(),
      getCouponAndDeals(),
      getCategories(),
      getHomPage()
    ]);


  return (
    <>
      <LandingPageSlider data={exclusiveCoupon} />
      <FavoritesCoupons data={favoritesCoupon} />
      <FavoriteStores data={favStores} />
      <CouponsAndDeals data={couponsAndDeals} />
      <TopCategories data={categories} />
      <HowItWorks data={homePage} />
    </>
  );
}
