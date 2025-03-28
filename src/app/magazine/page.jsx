import StoresTemp from '@/templates/stores'
import React from 'react'
import { getAllStore, getStores } from "../../services"

export const metadata = {
  title: 'Magazine cu Coduri Reducere și Vouchere - CodCupon.ro',
  description: 'Descoperă toate magazinele partenere CodCupon cu coduri de reducere și vouchere active. Economisește la cumpărături cu oferte verificate zilnic.',
  alternates: {
    canonical: 'https://www.codcupon.ro/magazine'
  }
}

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