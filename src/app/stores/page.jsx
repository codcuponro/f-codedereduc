import StoresTemp from '@/templates/stores'
import React from 'react'
import {getAllStore, getStores} from "../../services"

const Store = async() => {
  const stores = await getAllStore()
  const favStores = await getStores()
  
  return (
    <>
      <StoresTemp stores={stores} favStores={favStores}/>
    </>
  )
}

export default Store