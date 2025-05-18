import AboutTemp from '@/templates/about'
import {getAboutPage} from "../../../services"

export const metadata = {
  alternates: {
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