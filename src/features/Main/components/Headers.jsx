import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
import { useAuthContext, useProductContext } from "../../../context";
import Search from "./Search";

const Headers = () => {
    const { AuthorizationToken } = useAuthContext()
    const { category } = useProductContext()
   
    const location = useLocation()
    const path = location.pathname.split("/")[1]
    return (
        <>
            <nav >
                <div className="flex items-center justify-between py-4 px-10">
                    <Link to="/" >
                        <img src="../brand-logo.png" />
                    </Link>
                    <Search/>
                    {AuthorizationToken ?
                        <div className="flex items-center justify-center gap-7 text-gray-500 text-lg " >
                            <Link to="/profile" className=" flex flex-col items-center"  >
                                <FaUser />
                                <span className="text-xs">Profie</span>
                            </Link>
                            <Link to="/cart" className=" flex flex-col items-center"  >
                                <FaShoppingCart />
                                <span className="text-xs"> My Cart</span>
                            </Link>

                            <div className=" flex flex-col items-center"  >
                                <MdMessage />
                                <span className="text-xs">message</span>
                            </div>
                        </div>
                        : <div className="flex gap-4" >
                            <Link to="/login" className="py-1 px-3 border-2 rounded-lg hover:bg-blue-500 hover:text-white flex gap-1 items-center " > <FaUser /> Login</Link>
                            <Link to="/register/seller" className="py-1 px-3 border-2 rounded-lg hover:bg-blue-500 hover:text-white flex gap-1 items-center" > <AiFillShop /> Become a Seller</Link>
                        </div>

                    }
                </div>

                <hr />
                {path === "cart" || path === "profile" ? null : <div>
                    <ul className="flex justify-between items-center py-4 px-10">
                        {category?.map((item, index) => {
                            return (
                                <li key={index} className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer ">
                                    <Link to={`/productlist?category=${item?.category_name}`} className="flex flex-col items-center" >
                                        <img src={item?.category_image} className="w-14 h-14 rounded-full" />
                                        <span className="capitalize" >{item?.category_name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
                <hr />
            </nav>
        </>
    );
};

export default Headers;
