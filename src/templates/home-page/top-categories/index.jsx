import CategoryButton from '@/components/card/category-button'
import Title from '@/components/title/title'
import { getCategories } from '@/services'
import React from 'react'

const TopCategories = async () => {
  const data = await getCategories()
  return (
    <section className='container mx-auto px-4 lg:px-0 my-8 md:my-16'>
      <Title
        title="Top categories"
        buttonLabel="See all categories"
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
          title="Top categories"
          buttonLabel="See all categories"
          buttonHref="/categories"
          hideHeading
        />
      </div>
    </section>
  )
}

export default TopCategories