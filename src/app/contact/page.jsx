import AboutTemp from '@/templates/about'
import React from 'react'
import {getContactPage} from "../../services"

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