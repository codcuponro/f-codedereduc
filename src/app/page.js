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
    "name": "codedereduc",
    "url": "https://codedereduc.fr/",
    "logo": "https://www.codedereduc.fr/logo.svg",
    "sameAs": "https://codedereduc.fr/Contact"
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
