import React from 'react'
import SideBar from './components/SideBar'
import { Outlet} from 'react-router-dom'

const UserProfile = () => {
    return (
        <div className='flex gap-20' >
            <SideBar />
            <Outlet/>
        </div>
    )
}

export default UserProfile