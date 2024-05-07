import React from 'react'
import Headers from '../features/Main/components/Headers'
import { Outlet } from 'react-router-dom'
import Footer from '../features/Main/components/Footer'

const UserLayout = () => {
  return (
    <div>

      <Headers />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout