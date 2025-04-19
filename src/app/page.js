import LandingPageSlider from "@/components/main/landing-page-slider";
import { getCategories, getCouponAndDeals, getExclusiveCoupon, getFavoritesCoupon, getHomPage, getStores } from "@/services";
import CouponsAndDeals from "@/templates/home-page/coupons-and-deals";
import FavoritesCoupons from "@/templates/home-page/favorites-coupons";
import FavoriteStores from "@/templates/home-page/favorites-stores";
import HowItWorks from "@/templates/home-page/how-it-works";
import TopCategories from "@/templates/home-page/top-categories";
import { shuffleArray } from "@/utils";

export default async function Home(props) {
  const params = props?.params?.locale
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "codcupon",
    "url": "https://codcupon.ro/",
    "logo": "https://www.codcupon.ro/logo.svg",
    "sameAs": "https://codcupon.ro/contact"
  }
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

    
    const shuffledCoupons = shuffleArray(exclusiveCoupon);
    console.log("🚀 ~ Home ~ couponsAndDeals:", couponsAndDeals.length)

  return (
    <>
      <LandingPageSlider data={shuffledCoupons} />
      <FavoritesCoupons data={favoritesCoupon} />
      <FavoriteStores data={favStores?.slice(0, 10)} />
      <CouponsAndDeals data={couponsAndDeals} />
      <TopCategories data={categories} />
      <HowItWorks data={homePage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
