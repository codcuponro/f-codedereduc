import AboutTemp from '@/templates/about'
import React from 'react'
import {getCookiePolicy} from "../../../services"

export const metadata = {
  alternates: {
    canonical: `https://www.codcupon.ro/fisiere-cookies`,
  }
}

const AboutUs = async () => {
  const pageData  = await getCookiePolicy()
  return (
    <>
      <AboutTemp data={pageData} title="Politica fisierele cookies"/>
    </>
  )
}

export default AboutUs