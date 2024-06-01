import React from 'react'
import Headers from '../features/Main/components/Headers'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../features/Main/components/Footer'

const UserLayout = () => {
  const location = useLocation()
  return (
    <div>

      {location.pathname !== "/cancel" && location.pathname !== "/success" && <Headers />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout