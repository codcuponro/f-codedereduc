import AboutTemp from '@/templates/about'
import React from 'react'
import {getTermAndConditionPage} from "../../../services"


export const metadata = {
  alternates: {
    canonical: `https://www.codedereduc.fr/termeni-si-conditii`,
  }
}

const AboutUs = async (props) => {
  const params = props?.params?.locale
  const pageData  = await getTermAndConditionPage(params)
  return (
    <>
      <AboutTemp data={pageData} title="Termes et conditions"/>
    </>
  )
}

export default AboutUs