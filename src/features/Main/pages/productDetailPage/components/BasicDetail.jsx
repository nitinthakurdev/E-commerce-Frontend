import React, { useState } from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import StarRatings from 'react-star-ratings';

const BasicDetail = () => {
    const images = ["./productimage/camra.png", "./productimage/laptop.png", "./productimage/hearphone.png", "./productimage/phone.png"]
    const [renderImage,setrenderImage] = useState(images[0])
    return (
        <div className='flex items-center justify-between py-4' >
            <div className='border-2 w-[35%] p-10 rounded-md' >
                <div className='w-full flex justify-center items-center border-2 rounded-md py-4' >

                    <img src={renderImage} className='h-[280px]' alt="" />
                </div>
                <div className='flex gap-3 pt-10' >
                    {images.map((item, index) => (
                        <div key={index} className=' border-2 rounded-md h-20 w-20 p-3' onClick={()=>setrenderImage(item)} >
                            <img src={item} className='size-full' alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col border-2 w-[60%] p-10 rounded-md' >
                <span className='text-green-600 flex items-center  gap-2' ><IoCheckmarkSharp /> In stock</span>
                <span className='text-xl py-2 font-medium ' >Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</span>
                <span className='py-2' ><StarRatings
                    starRatedColor="#ff9017"
                    rating={2.8}
                    starDimension="20px"
                    starSpacing="3px"
                /></span>
                <ul className='py-5 flex flex-col gap-7' >
                    <li>Price: ₹5000</li>
                    <li>Type : Classic </li>
                    <li>Material : Plastic</li>
                    <li>Design : Modern Nice</li>
                    <li>Warranty : 2 years full warranty</li>
                    <li>Protection : Refund policy</li>
                </ul>
            </div>
        </div>
    )
}

export default BasicDetail