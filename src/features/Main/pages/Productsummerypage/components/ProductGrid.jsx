import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const ProductGrid = ({ data }) => {
    return (
        <>
            <div className='my-3 grid grid-cols-4 gap-5' >

                {data.map((item, index) => {
                    return (
                        <Link to="/productdetail" key={index} >
                        <div  className='p-3 border-2 rounded-md' >
                            <div className='flex  justify-center ' >
                                <img src={item.image} className='h-36' />
                            </div>
                            <div className='py-4' >
                                <div className='flex justify-between items-center' >
                                    <div className='flex items-center gap-2' >
                                        <span className='text-lg font-medium' >₹{item.sellingPrice}</span>
                                        <span className='text-gray-500 line-through' >₹{item.mrpPrice}</span>
                                        <span className='text-green-500 ' >₹{item.discunt}</span>
                                    </div>
                                    <div className='py-1 px-2 rounded-md border-2' >
                                        wish
                                    </div>

                                </div>
                                <div className='flex items-center gap-3' >
                                    <span  >
                                        <StarRatings
                                            starRatedColor="#ff9017"
                                            rating={item.rating}
                                            starDimension="20px"
                                            starSpacing="3px"
                                        />
                                    </span>
                                        <span className='text-[#ff9017] text-xl font-bold' >{item.rating}</span>
                                </div>
                                <p className=' font-medium' >{item.name}</p>
                            </div>
                        </div>
                </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ProductGrid