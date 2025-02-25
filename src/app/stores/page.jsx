import StoresTemp from '@/templates/stores'
import React from 'react'
import qs from "qs"
import { Request } from '@/services/Request'

async function getData() {
  const sparams = qs.stringify({
      populate: [
          'Icon', "coupons_and_deals",
      ],
      filters: {
          Favorit: {
              $eq: true
          }
      },
      pagination: {
          limit: 10
      }
  })
  const stores = await Request(`/stores?${sparams}`);
  return {
      stores: stores?.data
  }
}

const Store = async() => {
  const {stores} = await getData()

  return (
    <>
      <StoresTemp stores={stores}/>
    </>
  )
}

export default Store