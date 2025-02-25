import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../context';

const SellerHeaders = () => {
    const {LogoutHandler} = useAuthContext()
    const [menu, setMenu] = useState(false)
    const [menu1, setMenu1] = useState(false)
    const [toggle,setToggle] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

    const showMenu1 = () => {
        setMenu1(!menu1)
    }

    return (
        <div className='bg-blue-500 text-white font-medium text-lg flex justify-between ' >
            <div className='flex gap-5 py-2 px-4' >
                <img src="../brand-logo.png" className=' rounded-lg bg-white' alt="" />
                <ul className='flex gap-10 items-center justify-around select-none '>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/order" >Orders</Link></li>
                    <li className='flex items-center gap-2 relative' onMouseEnter={showMenu} onMouseLeave={showMenu} > <FaAngleDown className={`${menu ? "rotate-0" : "rotate-180"} duration-200 transition-all`} /> Listing
                        {menu && <div className=' absolute w-40 z-50 top-full left-0 bg-blue-500 rounded-lg overflow-hidden ' >
                            <ul className='py-3' >
                                <li className='hover:bg-blue-600 px-3 py-1 cursor-pointer ' ><Link to="/product-list" >Product List</Link></li>
                                <li className='hover:bg-blue-600 px-3 py-1 cursor-pointer '><Link to='/category-list' >Category List</Link> </li>
                            </ul>
                        </div>}
                    </li>
                    <li className='flex items-center gap-2 relative' onMouseEnter={showMenu1} onMouseLeave={showMenu1} > <FaAngleDown className={`${menu1 ? "rotate-0" : "rotate-180"} duration-200 transition-all`} /> Product
                        {menu1 && <div className=' absolute w-52 z-50 top-full left-0 bg-blue-500 rounded-lg overflow-hidden ' >
                            <ul className='py-3' >
                                <li className='hover:bg-blue-600 px-3 py-1 cursor-pointer ' ><Link to="/add-product/new" >Add Product</Link></li>
                                <li className='hover:bg-blue-600 px-3 py-1 cursor-pointer '><Link to="/add-category/new" >Add Category</Link></li>
                                <li className='hover:bg-blue-600 px-3 py-1 cursor-pointer '><Link>Add Pricing & deliery</Link></li>
                            </ul>
                        </div>}
                    </li>
                    <li>Payememts</li>
                </ul>
            </div>
            <div className='flex items-center justify-center gap-5 px-5'>
                <span className='flex items-center gap-1 cursor-pointer' > <IoChatbubbles /> Chat</span>
                <div className='flex items-center gap-2 relative' >
                    <div className='h-10 w-10 bg-white rounded-full overflow-hidden cursor-pointer ' onClick={()=>setToggle(!toggle)} > <img src="../profile.jpg" className='size-full' alt="" />  </div>
                    <span>Nitin</span>
                    <div className={`absolute top-10 ${toggle ? "" : "hidden"}  w-20 py-1`} >
                        <button className='text-lg font-medium bg-gray-200 rounded-lg py-1 px-3 text-gray-600 hover:bg-gray-100' onClick={LogoutHandler} >Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerHeaders