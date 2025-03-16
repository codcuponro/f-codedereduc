import qs from "qs"
import { Request } from "@/config/Axios"

async function getHomPage(locale = "ro") {
  const params = qs.stringify({
    populate: [
      'HowItswork.Icon'
    ],
    locale
  })
  const response = await Request(`/home-page?${params}`);
  return response.data
}

async function getStores(locale = "ro") {
  const sparams = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals",
    ],
    filters: {
      Favorit: {
        $eq: true
      }
    },
    locale,
    pagination: {
      limit: 10
    }
  })
  const stores = await Request(`/stores?${sparams}`);
  return stores?.data
}



async function getCategories(locale = "ro") {
  const cparams = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store"
    ],
    filters: {
      Top: {
        $eq: true
      }
    },
    locale,
    pagination: {
      limit: 25
    }
  })
  const categories = await Request(`/categories?${cparams}`);
  return categories?.data
}


async function getCouponAndDeals(locale = "ro") {
  const cdparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "store.Social"
    ],
    locale,
    pagination: {
      limit: 15
    }
  })
  const couponAndDeals = await Request(`/coupons-and-deals?${cdparams}`);
  return couponAndDeals?.data
}

async function getFavoritesCoupon(locale = "ro") {
  const fcdparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "store.Social"
    ],
    locale,
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

async function getExclusiveCoupon(locale = "ro") {
  const exparams = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "Feature_image", "store.Social"
    ],
    locale,
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

async function getFooter(locale = "ro") {
  const params = qs.stringify({
    locale,
    populate: '*',
  });
  const footerRes = await Request(`/footer?${params}`);
  return footerRes?.data
}

async function getHeader(locale = "ro") {
  const params = qs.stringify({
    locale,
    populate: '*',
  });
  const headerRes = await Request(`/header?${params}`);
  return headerRes?.data
}

async function getFavorites50Coupon(locale = "ro") {
  const params = qs.stringify({
    populate: [
      'Icon', "categories.Icon", "store.Icon", "store.Social"
    ],
    locale,
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
  return favoritesCoupon?.data
}

async function getAllStore(locale = "ro") {
  const params = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals",
    ],
    locale,
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
    locale: params?.locale,
    filters: {
      Slug: {
        $eq: params.slug
      }
    }
  })
  const stores = await Request(`/stores?${qParams}`);
  return stores?.data?.[0]
}

async function getAllCategories(locale = "ro") {
  const params = qs.stringify({
    populate: [
      'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store", "coupons_and_deals.store.Social"
    ],
    locale,
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
    locale: param?.locale,
    filters: {
      Slug: {
        $eq: param?.slug
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
    locale,
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

async function getAboutPage(locale = "ro") {
  const params = qs.stringify({
    locale,
    populate: '*',
  });
  const pageResponse = await Request(`/about-page?${params}`);
  return pageResponse?.data
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