import React from 'react'
import CartCard from './CartCard'
import { FaArrowLeftLong } from "react-icons/fa6";
import CheckOut from './CheckOut';

const CartProduct = () => {
    return (
        <div className='flex justify-between ' >
            <div className=' relative my-2 pt-2 px-4 w-[70%] border-2 rounded-lg max-h-screen overflow-y-scroll' >
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <div className='sticky bottom-0 left-0 bg-white w-full py-3 flex justify-between' >
                    <button className='text-white bg-blue-600 py-1 px-3 rounded-lg hover:bg-blue-800 flex items-center gap-2' > <FaArrowLeftLong /> Back to shop</button>
                    <button className=' border-2 text-blue-600 py-1 px-3 rounded-lg hover:bg-red-500 hover:text-white' > Remove All</button>
                </div>
            </div>
            <div className='w-[25%]  rounded-lg p-2' >
            <CheckOut />
            </div>
        </div>
    )
}

export default CartProduct