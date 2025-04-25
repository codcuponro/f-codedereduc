import AboutTemp from '@/templates/about'
import React from 'react'
import {getAboutPage} from "../../../services"

export const metadata = {
  alternates: {
    canonical: `https://www.codcupon.ro/despre-noi`,
  }
}

const AboutUs = async (props) => {
  const params = props?.params?.locale
  const pageData  = await getAboutPage(params)
  return (
    <>
      <AboutTemp data={pageData} title="Despre noi"/>
    </>
  )
}

export default AboutUs