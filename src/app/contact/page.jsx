import AboutTemp from '@/templates/about'
import React from 'react'
import {getContactPage} from "../../services"

export const metadata = {
    alternates: {
      canonical: `https://www.codedereduc.fr/contact`,
    }
}

const AboutUs = async (props) => {
  const params = props?.params?.locale
  const pageData  = await getContactPage(params)
  return (
    <>
      <AboutTemp data={pageData} title="Contact"/>
    </>
  )
}

export default AboutUs