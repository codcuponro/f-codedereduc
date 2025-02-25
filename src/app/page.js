import LandingPageSlider from "@/components/main/landing-page-slider";
import { getExclusiveCoupon, getFavoritesCoupon } from "@/services";
import CouponsAndDeals from "@/templates/home-page/coupons-and-deals";
import FavoritesCoupons from "@/templates/home-page/favorites-coupons";
import FavoriteStores from "@/templates/home-page/favorites-stores";
import HowItWorks from "@/templates/home-page/how-it-works";
import TopCategories from "@/templates/home-page/top-categories";

export default async function Home() {
  const favoritesCoupon = await getFavoritesCoupon()
  const exclusiveCoupon = await getExclusiveCoupon()
  return (
    <>
      <LandingPageSlider data={exclusiveCoupon}/>
      <FavoritesCoupons data={favoritesCoupon} />
      <FavoriteStores />
      <CouponsAndDeals/>
      <TopCategories />
      <HowItWorks/>
    </>
  );
}
