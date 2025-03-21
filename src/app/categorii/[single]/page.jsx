import CategorySingleTemp from "@/templates/categories/category-single"
import {getAllCategories, getSingleCategory} from "../../../services"
import { getActiveAndDisabledCoupons } from "@/utils"

const SingleCategory = async ({ params }) => {
  const param = await params.single
  const locale = await params.locale
  const { category } = await getSingleCategory({slug:param, locale})
  const {activeCoupon, disableCoupon } = await getActiveAndDisabledCoupons(category?.coupons_and_deals)
  const categories = await getAllCategories(params)
  
  return (
    <>
      <CategorySingleTemp params={param} data={category} coupons={activeCoupon} categories={categories} />
    </>
  )
}

export default SingleCategory