import CategoriesTemp from '@/templates/categories'
import React from 'react'
import {getAllCategories} from "../../services"

const Categories = async () => {
  const categoriesData = await getAllCategories()
  return (
    <>
      <CategoriesTemp data={categoriesData}/>
    </>
  )
}

export default Categories