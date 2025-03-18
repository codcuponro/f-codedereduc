import Breadcrumb from '@/components/breadcrumb'
import Title from '@/components/title/title'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

const AboutTemp = ({ data, title }) => {
    const breadcrumbPath = [
        {
            label: title,
            href: '/about-us'
        }
    ]
    return (
        <>
            <section className='mt-6 mb-10'>
                <div className='container mx-auto px-4 lg:px-0 '>
                    <Title
                        title={title}
                    />
                    <div style={{ marginTop: '35px' }}
                        className='page_content single_store_content'
                    >
                        {
                            data &&
                            <BlocksRenderer content={data?.Content} />
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

export default AboutTemp