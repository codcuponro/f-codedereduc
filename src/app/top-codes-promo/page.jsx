import React from 'react';
import { getActiveAndDisabledCoupons, getUniqueCategories } from '@/utils';
import { getFavorites50Coupon } from '@/services';
import Top50Coupons from "@/templates/top-50-coupons"

export const metadata = {
  alternates: {
    canonical: `https://www.codedereduc.fr/top-codes-promo`,
  }
}

const Top50CouponsAndDeals = async (props) => {
  const params = props?.params?.locale
  const favoritesCoupon = await getFavorites50Coupon(params);
  // const categories = await getAllCategories(params)
  const {activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(favoritesCoupon)
  const categories = getUniqueCategories(activeCoupon);

  return (
    <Top50Coupons activeCoupon={activeCoupon} categories={categories}/>
  );
};

export default Top50CouponsAndDeals;
