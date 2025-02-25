import qs from "qs"
import {Request} from "@/config/Axios"

async function getHomPage() {
  const params = qs.stringify({
    populate: [
      'HowItswork.Icon'
    ],
  })
  const response = await Request(`/home-page?${params}`);
  return response.data
}

export {
  getHomPage
}