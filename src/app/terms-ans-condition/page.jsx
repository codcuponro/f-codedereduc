import AboutTemp from '@/templates/about'
import React from 'react'
import {getTermAndConditionPage} from "../../services"

const AboutUs = async (props) => {
  const params = props?.params?.locale
  const pageData  = await getTermAndConditionPage(params)
  return (
    <>
      <AboutTemp data={pageData} title="Termeni si Conditii"/>
    </>
  )
}

export default AboutUs