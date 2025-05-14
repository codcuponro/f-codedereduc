import CategoryButton from '@/components/card/category-button'
import Title from '@/components/title/title'
import {constData} from "../../../const"
import React from 'react'

const TopCategories =  ({data}) => {

  return (
    <section className='container mx-auto px-4 lg:px-0 my-8 md:my-16'>
      <Title
        title={constData?.top_categories_title}
        buttonLabel={constData?.top_categories_btn_label}
        buttonHref="/categories"
        hideButton
      />
      <div
        style={{ marginTop: '35px' }}
        className='flex flex-wrap gap-2.5'
      >
        {
          data?.map((item, idx) => (
            <CategoryButton key={idx} data={item}/>
          ))
        }
      </div>
      <div className='mt-6 md:hidden'>
        <Title
          title={constData?.top_categories_title}
          buttonLabel={constData?.top_categories_btn_label}
          buttonHref="/categories"
          hideHeading
        />
      </div>
    </section>
  )
}

export default TopCategories