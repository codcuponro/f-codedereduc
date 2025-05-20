import AboutTemp from '@/templates/about'
import {getAboutPage} from "../../../services"

export const metadata = {
  alternates: {
    title: 'A propos de nous | CodedeReduc',
    canonical: `https://www.codedereduc.fr/despre-noi`,
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