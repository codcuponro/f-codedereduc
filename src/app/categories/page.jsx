// import CategoriesTemp from '@/templates/categories'
// import React from 'react'
// import qs from "qs"
// import { Request } from '@/services/Request';

// async function getData() {
//   const cparams = qs.stringify({
//     populate: [
//       'Icon', "coupons_and_deals.Icon", "coupons_and_deals.categories", "coupons_and_deals.store"
//     ],
//     pagination: {
//       limit: 200
//     }
//   })
//   const categories = await Request(`/categories?${cparams}`);
//   return {
//     categoriesData : categories?.data
//   }
// }

// const Categories = async () => {
//   const {categoriesData} = await getData()

//   return (
//     <>
//       <CategoriesTemp data={categoriesData}/>
//     </>
//   )
// }

// export default Categories



import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page