import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const Description = ({data}) => {
    const description = data?.description?.split(":")
    
    return (
        <div className='py-3 px-2 text-justify max-h-screen overflow-y-scroll ' >
            <div className='text-gray-600 ' >
                {description?.map((item,index)=>(
                    <div>
                        <p className='flex gap-3 items-center'>
                            <span><GoDotFill /></span>
                            <span>{item}</span>
                        </p>
                    </div>
                ))}
            </div>
            <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden max-w-sm  my-5">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Model</td>
                            <td className="py-3 px-4 text-left">{data?.product_modal}</td>
                        </tr>
                        
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Dimantion</td>
                            <td className="py-3 px-4 text-left">{data?.product_dimantion}</td>
                        </tr>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Category</td>
                            <td className="py-3 px-4 text-left capitalize">{data?.product_category?.category_name}</td>
                        </tr>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Brand</td>
                            <td className="py-3 px-4 text-left capitalize">{data?.product_brand}</td>
                        </tr>

                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Warranty</td>
                            <td className="py-3 px-4 text-left capitalize">{data?.product_warranty}</td>
                        </tr>
                        <tr  >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Protection</td>
                            <td className="py-3 px-4 text-left capitalize">Refund policy</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Description