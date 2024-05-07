import React from 'react'
import StarRatings from 'react-star-ratings'

const ProductList = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className='border-2 my-3 py-3 rounded-md flex ' >
                            <div className='w-[25%] ' >
                                <img src={item.image} className='h-36 ps-5' alt="" />
                            </div>
                            <div className='w-[75%] ' >
                                <div className='flex items-center justify-between pr-6' >
                                    <h2 className='text-lg ' >{item.name}</h2>
                                    <span className='border-2 py-1 px-2 rounded-md cursor-pointer' >wish</span>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center ' >
                                        <span className='text-xl font-medium' >₹{item.sellingPrice}</span>
                                        <span className='text-gray-500 line-through' >₹{item.mrpPrice}</span>
                                        <span className='text-green-500 font-bold' >{item.discunt} off</span>
                                    </div>
                                    <div className='flex gap-3 items-center '>
                                        <span><StarRatings
                                        starRatedColor="#ff9017"
                                            rating={item.rating}
                                            starDimension="20px"
                                            starSpacing="3px"
                                        /></span>
                                        <span className='text-green-500 font-medium' >Free Shipping</span>
                                    </div>
                                </div>
                                <p className='text-gray-600' >{item.desc}</p>
                                <button className='text-blue-500  font-medium' >
                                    View details
                                </button>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductList