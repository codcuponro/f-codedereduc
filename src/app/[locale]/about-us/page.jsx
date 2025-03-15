import AboutTemp from '@/templates/about'
import React from 'react'
import {getAboutPage} from "../../services"

const AboutUs = async () => {
  const pageData  = await getAboutPage()
  return (
    <>
      <AboutTemp data={pageData}/>
    </>
  )
}

export default AboutUs