import qs from "qs"
import { Request } from "@/config/Axios"

async function getHomPage() {
  const params = qs.stringify({
    populate: [
      'HowItswork.Icon'
    ],
  })
  const response = await Request(`/home-page?${params}`);
  return response.data
}

async function getStores() {
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
  return stores?.data
}



async function getCategories() {
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
  return categories?.data
}


async function getCouponAndDeals() {
  const cdparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "store.Social"
    ],
    pagination: {
      limit: 15
    }
  })
  const couponAndDeals = await Request(`/coupons-and-deals?${cdparams}`);
  return couponAndDeals?.data
}

async function getFavoritesCoupon() {
  const fcdparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "store.Social"
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
  return favoritesCoupon?.data
}

async function getExclusiveCoupon() {
  const exparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "Feature_image", "store.Social"
    ],
    filters: {
      Slider: {
        $eq: true
      }
    },
    pagination: {
      limit: 6
    }
  })
  const exParamsCoupon = await Request(`/coupons-and-deals?${exparams}`);
  return exParamsCoupon?.data
}

async function getFooter() {
  const footerRes = await Request(`/footer?populate=*`);
  return footerRes?.data
}

async function getHeader() {
  const headerRes = await Request(`/header?populate=*`);
  return headerRes?.data
}

async function getFavorites50Coupon() {
  const params = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "store.Social"
    ],
    filters: {
      FavoritesCoupon: {
        $eq: true
      }
    },
    pagination: {
      limit: 50
    }
  })
  const favoritesCoupon = await Request(`/coupons-and-deals?${params}`);
  return  favoritesCoupon?.data
}

async function getAllStore() {
  const params = qs.stringify({
      populate: [
          'Icon', "coupons_and_deals",
      ],
      pagination: {
          limit: 500
      }
  })
  const stores = await Request(`/stores?${params}`);
  return stores?.data
}


async function getSingleStore(params) {
  const qParams = qs.stringify({
    populate: [
      'Icon', "users_permissions_user", "Social", "coupons_and_deals",
      'coupons_and_deals.Icon', "coupons_and_deals.categories.Icon", "coupons_and_deals.store.Icon", "coupons_and_deals.store.Social"
    ],
    filters: {
      Slug: {
        $eq: params
      }
    }
  })
  const stores = await Request(`/stores?${qParams}`);
  return stores?.data?.[0]
}

async function getAllCategories() {
  const params = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store", "coupons_and_deals.store.Social"
    ],
    pagination: {
      limit: 400
    }
  })
  const categories = await Request(`/categories?${params}`);
  return categories?.data
}



async function getSingleCategory(param) {
  const cparams = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store.Icon", "coupons_and_deals.store.Social"
    ],
    filters: {
      Slug: {
        $eq: param
      }
    },
  })
  const category = await Request(`/categories?${cparams}`);

  const params = qs.stringify({
    populate: [
      'Icon'
    ],
    filters: {
      Top: {
        $eq: true
      }
    },
    pagination: {
      limit: 12
    }
  })
  const categories = await Request(`/categories?${params}`);
  return {
    category: category?.data?.[0],
    categories: categories?.data
  }
}

async function getAboutPage() {
  const pageResponse = await Request(`/about-page?populate=*`);
  return  pageResponse?.data
}

export {
  getHomPage,
  getStores,
  getCategories,
  getCouponAndDeals,
  getFavoritesCoupon,
  getExclusiveCoupon,
  getFooter,
  getHeader,
  getFavorites50Coupon,
  getAllStore,
  getSingleStore,
  getAllCategories,
  getSingleCategory,
  getAboutPage
}