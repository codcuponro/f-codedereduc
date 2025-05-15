import AboutTemp from '@/templates/about'
import React from 'react'
import {getAboutPage} from "../../../services"

export const metadata = {
  alternates: {
    canonical: `https://www.codedereduc.ro/despre-noi`,
  }
}

const AboutUs = async (props) => {
  const params = props?.params?.locale
  const pageData  = await getAboutPage(params)
  return (
    <>
      <AboutTemp data={pageData} title="A propos de nous"/>
    </>
  )
}

export default AboutUs