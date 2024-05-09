import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='px-10  bg-slate-100 py-10' >
            <div className='grid grid-cols-6 gap-5' >
                <div>
                    <img src="../brand-logo.png" alt="logo" />
                    <h2 className='font-medium text-gray-600' >Best information about the company Lorem ipsum dolor sit amet.</h2>
                    <div className='text-xl flex gap-3 py-3 ' >
                        <span className='text-gray-600  ' >< FaFacebook className="hover:scale-110" /></span>
                        <span className='text-gray-600  ' >< FaInstagram className="hover:scale-110" /></span>
                        <span className='text-gray-600  ' >< FaLinkedin className="hover:scale-110" /></span>
                        <span className='text-gray-600  ' >< FaTwitter className="hover:scale-110" /></span>
                        <span className='text-gray-600  ' >< FaYoutube className="hover:scale-110" /></span>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-lg ' >About</h2>
                    <ul>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >About us</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Find store</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >categories</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Blogs </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-lg ' >PartnerShip</h2>
                    <ul>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >About us</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Find store</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >categories</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Blogs </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-lg ' >information </h2>
                    <ul>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >About us</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Find store</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >categories</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Blogs </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-lg ' >For Users</h2>
                    <ul>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Login </li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Register</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >Settings</li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >My Orders </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-lg ' >Get App</h2>
                    <ul>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer' >
                            <img src="./istore.png" alt="" /> </li>
                        <li className='text-gray-500 hover:text-gray-800 transition-all duration-150 cursor-pointer py-2' >
                        <img src="./gstore.png" alt="" />
                        </li>
                        
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                © All right reserved 2024
            </div>
        </div>
    )
}

export default Footer