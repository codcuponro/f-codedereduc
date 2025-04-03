import AboutTemp from '@/templates/about'
import React from 'react'
import {getPrivacyPage} from "../../../services"

const AboutUs = async () => {
  const pageData  = await getPrivacyPage()
  return (
    <>
      <AboutTemp data={pageData} title="Confindentialiate"/>
    </>
  )
}

export default AboutUs