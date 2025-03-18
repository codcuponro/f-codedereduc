import CategoriesTemp from '@/templates/categories'
import React from 'react'
import {getAllCategories} from "../../services"

const Categories = async (props) => {
  const params = props?.params?.locale
  const categoriesData = await getAllCategories(params)
  return (
    <>
      <CategoriesTemp data={categoriesData}/>
    </>
  )
}

export default Categories