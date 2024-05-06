import React from "react";
import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Headers = () => {
    return (
        <>
            <nav >
                <div className="flex items-center justify-between py-4 px-10">
                    <div>
                        <img src="./brand-logo.png" />
                    </div>
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
                    <div className="flex items-center justify-center gap-7 text-gray-500 text-lg " >
                        <div className=" flex flex-col items-center"  >
                            <FaUser />
                            <span className="text-xs">Profie</span>
                        </div>
                        <div className=" flex flex-col items-center"  >
                            <FaShoppingCart />
                            <span className="text-xs"> My Cart</span>
                        </div>
                        <div className=" flex flex-col items-center"  >
                            <FaHeart />
                            <span className="text-xs">Orders</span>
                        </div>
                        <div className=" flex flex-col items-center"  >
                            <MdMessage />
                            <span className="text-xs">message</span>
                        </div>
                    </div>
                </div>

                <hr/>
                <div>
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
                </div>
                <hr/>
            </nav>
        </>
    );
};

export default Headers;
