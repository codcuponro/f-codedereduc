import AboutTemp from '@/templates/about'
import React from 'react'
import {getPrivacyPage} from "../../../services"

export const metadata = {
  alternates: {
    title: 'Politique de confidentialité | CodedeReduc',
    canonical: `https://www.codedereduc.fr/politica-confidentialitate`,
  }
}

const AboutUs = async () => {
  const pageData  = await getPrivacyPage()
  return (
    <>
      <AboutTemp data={pageData} title="Politique de confidentialité"/>
    </>
  )
}

export default AboutUs