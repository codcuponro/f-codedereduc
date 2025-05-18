import StoresCard from '@/components/card/stores-card'
import Title from '@/components/title/title'
// import { getStores } from '@/services'
import React from 'react'
import {constData} from "../../../const"

const FavoriteStores = ({ data }) => {
  return (
    <section className='bg-primary py-8 md:py-16 my-8 md:my-10'>
      <div className='container mx-auto px-4 lg:px-0 '>
        <Title
          title={constData?.fav_stores_title}
          buttonLabel={constData?.fav_stores_btn_label}
          buttonHref="/magasins"
          white
          hideButton
        />
        <div style={{ marginTop: '35px' }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5'
        >
          {
            data?.map((item, idx) => (
              <StoresCard key={idx} data={item} />
            ))
          }
        </div>
      </div>
      <div className='mt-6 px-4 md:hidden'>
        <Title
          title={constData?.fav_stores_title}
          buttonLabel={constData?.fav_stores_btn_label}
          buttonHref="/magasins"
          white
          hideHeading
        />
      </div>
    </section>
  )
}

export default FavoriteStores