import React, { useEffect, useState } from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import StarRatings from 'react-star-ratings';

const BasicDetail = ({data}) => {
    const [renderImage,setrenderImage] = useState("")

    useEffect(()=>{
        setrenderImage(data?.product_image[0]?.ImageUrl)
    },[data])
    return (
        <div className='flex items-center justify-between py-4' >
            <div className='border-2 w-[35%] p-10 rounded-md' >
                <div className='w-full flex justify-center items-center border-2 rounded-md py-4' >

                    <img src={renderImage} className='h-[300px] ' alt="" />
                </div>
                <div className='flex gap-3 pt-10' >
                    {data?.product_image?.map((item, index) => (
                        <div key={index} className=' border-2 rounded-md h-20 w-20 p-3' onClick={()=>setrenderImage(item.ImageUrl)} >
                            <img src={item.ImageUrl} className='size-full' alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col border-2 w-[60%] p-10 rounded-md' >
                <span className='text-green-600 flex items-center  gap-2' ><IoCheckmarkSharp /> In stock</span>
                <span className='text-xl py-2 font-medium ' >{data?.name}</span>
                <span className='py-2' ><StarRatings
                    starRatedColor="#ff9017"
                    rating={2.8}
                    starDimension="20px"
                    starSpacing="3px"
                /></span>
                <ul className='py-5 flex flex-col gap-5' >
                    <li>Price: <span className='text-green-500 text-lg' >₹{data?.selling_price} </span> <span className='line-through text-gray-500' > ₹{data?.mrp_price}</span></li>
                    <li>Type : {data?.product_type} </li>
                    <li>Material : {data?.product_material}</li>
                    <li>Design : {data?.product_design}</li>
                    <li className='flex gap-2 items-center'>Colors : <span className='flex gap-3 ' >{data?.product_color?.map((item,index)=><button key={index} className='border-2 py-1 px-2 rounded-lg hover:bg-slate-200' >{item}</button>)}</span></li>
                </ul>
                <div className='flex gap-7 items-center' >
                    <button className='border-2 py-2 px-10 font-medium text-lg rounded-lg bg-yellow-300 text-white hover:bg-yellow-400' >Buy Now</button>
                    <button className='border-2 py-2 px-10 font-medium text-lg rounded-lg bg-amber-400 text-white hover:bg-amber-500' >Add to Cart</button>
                    
                </div>
            </div>
        </div>
    )
}

export default BasicDetail