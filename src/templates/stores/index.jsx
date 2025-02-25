import React from 'react'
import Title from '@/components/title/title'
import StoresCard from '@/components/card/stores-card'
import StoreList from './StoreList'
import Breadcrumb from '@/components/breadcrumb'




const StoresTemp = async ({stores}) => {
    return (
        <>
            <section className='mt-6 mb-10'>
                <div className='container mx-auto px-4 lg:px-0 '>
                    <Title
                        title="Popular stores"
                    />
                    <div style={{ marginTop: '35px' }}
                        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5'
                    >
                        {
                            stores?.map((item, idx) => (
                                <StoresCard key={idx} data={item} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <StoreList stores={stores}/>

            <div className='container mx-auto px-4 lg:px-0 mb-10'>
                <Breadcrumb path={breadcrumbPath} />
            </div>
        </>
    )
}

export default StoresTemp

const breadcrumbPath = [
    {
        label: 'stores',
        href: '/stores'
    }
]