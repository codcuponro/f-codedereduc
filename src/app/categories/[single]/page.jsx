import CategorySingleTemp from "@/templates/categories/category-single"
import {getSingleCategory} from "../../../services"

const SingleCategory = async ({ params }) => {
  const param = await params.single
  const { category, categories } = await getSingleCategory(param)
  return (
    <>
      <CategorySingleTemp params={param} data={category} categories={categories} />
    </>
  )
}

export default SingleCategory