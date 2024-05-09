import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
import { useAuthContext } from "../../../context";

const Headers = () => {
    const {AuthorizationToken} = useAuthContext()
    const location = useLocation()
    const path = location.pathname.split("/")[1]
    return (
        <>
            <nav >
                <div className="flex items-center justify-between py-4 px-10">
                    <Link to="/" >
                        <img src="../brand-logo.png" />
                    </Link>
                    <div className="border-2 border-blue-500 h-full w-[35%] rounded-md ">
                        <input
                            type="text"
                            className="px-2 h-full w-[75%]  focus:outline-none"
                            placeholder="Search Product ..."
                        />
                        <button className="h-full w-[25%] bg-blue-500 text-white text-lg font-medium ">
                            Search
                        </button>
                    </div>
                    { AuthorizationToken ? 
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

                <hr/>
                {path === "cart" || path === "profile" ? null:  <div>
                    <ul className="flex justify-between items-center py-4 px-10">
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer " >All Category</li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">Mobile & Tablets </li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">TV & Appliances</li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">Electronic</li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">Beauty</li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">Home & Kitchen</li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">Furniture</li>
                        <li className="px-2 py-1 rounded-md hover:bg-slate-200 cursor-pointer">Top Offer</li>
                    </ul>
                </div>}
                <hr/>
            </nav>
        </>
    );
};

export default Headers;
