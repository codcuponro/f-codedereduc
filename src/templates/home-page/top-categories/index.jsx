import CategoryButton from '@/components/card/category-button'
import Title from '@/components/title/title'
import React from 'react'

const TopCategories = ({data}) => {
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
          data && 
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



export const categories = [
  { label: "Accessories", href: "accessories" },
  { label: "Beauty", href: "beauty" },
  { label: "Business & Services", href: "business-services" },
  { label: "Clothing", href: "clothing" },
  { label: "Department Stores", href: "department-stores" },
  { label: "Gaming", href: "gaming" },
  { label: "Electronics", href: "electronics" },
  { label: "Health", href: "health" },
  { label: "Home & Garden", href: "home-garden" },
  { label: "Regional", href: "regional" },
  { label: "Software", href: "software" },
  { label: "Adult", href: "adult" },
  { label: "Art & Craft", href: "art-craft" },
  { label: "Kids & Baby", href: "kids-baby" },
  { label: "Stationery", href: "stationery" },
  { label: "Optical", href: "optical" },
  { label: "Gifts", href: "gifts" },
  { label: "Garden", href: "garden" },
  { label: "Home", href: "home" },
  { label: "Automotive", href: "automotive" },
  { label: "Construction", href: "construction" },
  { label: "Gambling", href: "gambling" }
];
