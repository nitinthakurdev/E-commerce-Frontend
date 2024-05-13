import React from 'react'
import SellerHeaders from '../features/Seller/components/Headers'
import { Outlet } from 'react-router-dom'

const SellerLayout = () => {
  return (
    <div>
        <SellerHeaders />
        <Outlet/>
    </div>
  )
}

export default SellerLayout