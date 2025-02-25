// import { Request } from "@/services/Request";
// import CategorySingleTemp from "@/templates/categories/category-single"
// import qs from "qs"

// async function getData(param) {
//   const cparams = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store"
//     ],
//     filters: {
//       Slug: {
//         $eq: param
//       }
//     },
//   })
//   const category = await Request(`/categories?${cparams}`);

//   const params = qs.stringify({
//     filters: {
//       Top: {
//         $eq: true
//       }
//     },
//     pagination: {
//       limit: 12
//     }
//   })
//   const categories = await Request(`/categories?${params}`);
//   return {
//     category: category?.data?.[0],
//     categories: categories?.data
//   }
// }



// const SingleCategory = async ({ params }) => {
//   const param = await params.single
//   const { category, categories } = await getData(param)

//   return (
//     <>
//       <CategorySingleTemp params={param} data={category} categories={categories} />
//     </>
//   )
// }

// export default SingleCategory



import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page