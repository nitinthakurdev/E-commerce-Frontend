import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiCouponLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { useAuthContext } from '../../../../../context';

const SideBar = () => {
    const navigate = useNavigate()
    const {LogoutHandler} = useAuthContext()
    return (
        <>
            <aside className=" text-black bg-gray-50 w-64 min-h-screen p-4">
               
                <div className='flex items-center justify-center' >
                    <div className='relative'>

                        <div className='h-20 w-20 rounded-full  overflow-hidden relative' >
                            <img src="../avtar.png" className='size-full' alt="" />
                        </div>
                        <div className='absolute right-0 bottom-0 h-5 w-5 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center ' ><FaRegEdit /></div>
                    </div>
                </div>
                <div className=' py-5 flex flex-col gap-5' >
                    <Link to="/profile" className='text-lg font-medium flex items-center gap-3 hover:bg-slate-100 px-3 rounded-md py-1 ' >
                        <CgProfile />
                        My Profile
                    </Link>
                    <Link to="order" className='text-lg font-medium flex items-center gap-3 hover:bg-slate-100 px-3 rounded-md py-1 ' >
                        <CiDeliveryTruck />
                        Orders
                    </Link>
                    <Link to="wishlist" className='text-lg font-medium flex items-center gap-3 hover:bg-slate-100 px-3 rounded-md py-1 ' >
                        <FaRegHeart />
                        WishList
                    </Link>
                    <Link to="save-address" className='text-lg font-medium flex items-center gap-3 hover:bg-slate-100 px-3 rounded-md py-1 ' >
                        <IoLocationOutline />
                        Saved Address
                    </Link>
                    <Link to="rewards" className='text-lg font-medium flex items-center gap-3 hover:bg-slate-100 px-3 rounded-md py-1 ' >
                        <RiCouponLine />
                        My Rewards
                    </Link>
                    <button  className='text-lg font-medium flex items-center gap-3 hover:bg-slate-100 px-3 rounded-md py-1 ' onClick={LogoutHandler} >
                        <TbLogout2 />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    )
}

export default SideBar