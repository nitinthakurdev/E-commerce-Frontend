import React, { useState } from 'react'
import { useComponentContext } from '../../../../../context'
import { Link } from 'react-router-dom'

const CartCard = ({data}) => {
    const {RemoveToCart,disable,updateQty,makePayement} = useComponentContext()
    
    return (
        <>
            {data?.map((item,index)=>(
                <div key={index} className='flex border-2 gap-5 py-2 px-2 my-3' >
                <Link to={`/productdetail/${item?.product_id?._id}`} className='h-24 w-24' >
                    <img src={item?.product_id?.product_image[0]?.ImageUrl} className='size-full' alt="" />
                </Link>
                <div className='w-[80%]' >
                    <div className='flex justify-between items-center' >
                        <span className='text-lg font-medium ' >{item?.product_id?.name?.slice(0,50)}...</span>
                        <span className='text-lg font-medium' >Rs.{item?.product_id?.selling_price}</span>
                    </div>
                    <div className='py-2 flex flex-col gap-1' >
                        <span className='text-gray-500' >Color : {item.product_color} , Material : {item?.product_id?.product_material}</span>
                        <div className=' flex justify-between'>
                            <span className='text-gray-500' >Qty : {item.product_qty}</span>
                            <select className='w-36 px-3 border-2 rounded-lg py-1 focus:outline-none' disabled={disable} onChange={(e)=>updateQty(item?._id,e.target.value)} >
                                <option value={1} >Qty : 1</option>
                                <option value={2}  >Qty : 2</option>
                                <option value={3}  >Qty : 3</option>
                                <option value={4}  >Qty : 4</option>
                                <option value={5}  >Qty : 5</option>
                            </select>
                        </div>
                    </div>
                    <div className=' flex gap-5 py-1 ' >
                        <button className='px-3 py-1 border text-red-500 hover:bg-red-500 hover:text-white rounded-lg ' disabled={disable}  onClick={()=>RemoveToCart(item._id)} > Remove</button>
                        <button className='px-3 py-1 border text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-lg'disabled={disable} onClick={()=>makePayement(item.product_id)} >Buy Now</button>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default CartCard