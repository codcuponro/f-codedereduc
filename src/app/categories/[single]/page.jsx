import CategorySingleTemp from "@/templates/categories/category-single"
import {getSingleCategory} from "../../../services"

const SingleCategory = async ({ params }) => {
  const param = await params.single
  const locale = await params.locale
  const { category, categories } = await getSingleCategory({slug:param, locale})
  return (
    <>
      <CategorySingleTemp params={param} data={category} categories={categories} />
    </>
  )
}

export default SingleCategory