import AboutTemp from '@/templates/about'
import {getCookiePolicy} from "../../../services"

export const metadata = {
  alternates: {
    title: 'Gestion des cookies | CodedeReduc',
    canonical: `https://www.codedereduc.fr/fisiere-cookies`,
  }
}

const AboutUs = async () => {
  const pageData  = await getCookiePolicy()
  return (
    <>
      <AboutTemp data={pageData} title="Gestion des cookies"/>
    </>
  )
}

export default AboutUs