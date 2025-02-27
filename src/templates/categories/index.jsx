import Title from '@/components/title/title'
import React from 'react'
import Breadcrumb from '@/components/breadcrumb'

const CategoryIconCard = dynamic(() => import('./category-icon-card'), { ssr: false });

const CategoriesTemp = ({ data }) => {
  const breadcrumbPath = [
    {
      label: 'Categories',
      href: '/categories'
    }
  ]
  return (
    <>
      <section className='mt-6 mb-10'>
        <div className='container mx-auto px-4 lg:px-0 '>
          <Title
            title="Categories"
          />
          <div style={{ marginTop: '35px' }}
            className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-5'
          >
            {
              data?.map((item, idx) => (
                <CategoryIconCard key={idx} data={item} />
              ))
            }
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 lg:px-0 mb-10'>
        <Breadcrumb path={breadcrumbPath} />
      </div>

    </>
  )
}

export default CategoriesTemp