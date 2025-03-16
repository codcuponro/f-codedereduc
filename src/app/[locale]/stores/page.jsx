import StoresTemp from '@/templates/stores'
import React from 'react'
import { getAllStore, getStores } from "../../../services"

const Store = async (props) => {
  const params = props?.params?.locale
  const [
    stores,
    favStores,
  ] = await Promise.all([
    getAllStore(params),
    getStores(params),
  ]);

  return (
    <>
      <StoresTemp stores={stores} favStores={favStores} />
    </>
  )
}

export default Store