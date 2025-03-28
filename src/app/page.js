import LandingPageSlider from "@/components/main/landing-page-slider";
import { getCategories, getCouponAndDeals, getExclusiveCoupon, getFavoritesCoupon, getHomPage, getStores } from "@/services";
import CouponsAndDeals from "@/templates/home-page/coupons-and-deals";
import FavoritesCoupons from "@/templates/home-page/favorites-coupons";
import FavoriteStores from "@/templates/home-page/favorites-stores";
import HowItWorks from "@/templates/home-page/how-it-works";
import TopCategories from "@/templates/home-page/top-categories";

export default async function Home(props) {
  const params = props?.params?.locale
  
  const [
    favoritesCoupon,
    exclusiveCoupon,
    favStores,
    couponsAndDeals,
    categories,
    homePage] = await Promise.all([
      getFavoritesCoupon(params),
      getExclusiveCoupon(params),
      getStores(params),
      getCouponAndDeals(params),
      getCategories(params),
      getHomPage(params)
    ]);

  return (
    <>
      <div className="interactive">
        <LandingPageSlider data={exclusiveCoupon} />
      </div>
      <FavoritesCoupons data={favoritesCoupon} />
      <FavoriteStores data={favStores?.slice(0,10)} />
      <CouponsAndDeals data={couponsAndDeals?.slice(0,15)} />
      <TopCategories data={categories} />
      <HowItWorks data={homePage} />
    </>
  );
}
