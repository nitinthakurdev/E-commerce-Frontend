import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import Heart from "react-animated-heart";
import { useAuthContext, useProductContext } from '../../../../../context';

const ProductList = ({ data }) => {

    const [addWish,setAddWish] = useState(false)
    const [inde,setIndex] = useState(null)
    const navigate = useNavigate()
    const {addToWishlist} = useProductContext()
    const {AuthorizationToken} = useAuthContext()
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };

      const handleClick  = (id) =>{
        if(!AuthorizationToken){
            navigate("/login")
        }else{
            addToWishlist(id)
            setAddWish(true)
        }

      }
    return (
        <>
            {
                data?.map((item, index) => {

                    const amount = item.mrp_price - item.selling_price
                    const discount = (amount*100/item.mrp_price).toFixed()
                    return (
                        
                        <div key={index}  className='border-2 my-3 py-3 rounded-md flex ' >
                            <div className='w-[25%] ' >
                            <Link onClick={scrollToTop} to={`/productdetail/${item._id}`} key={index}>
                                <img src={item.product_image[0].ImageUrl} className='h-36 ps-5' alt="" />
                                </Link>
                            </div>
                            <div className='w-[75%] ' >
                            
                                <div className='flex items-center justify-between pr-6' >
                                    <h2 className='text-lg ' >{item.name}</h2>
                                    <span className='' ><Heart isClick={addWish} onClick={()=>handleClick(item._id)} /></span>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center ' >
                                        <span className='text-xl font-medium' >₹{item.selling_price}</span>
                                        <span className='text-gray-500 line-through' >₹{item.mrp_price}</span>
                                        <span className='text-green-500 font-bold' >{discount} off</span>
                                    </div>
                                    <div className='flex gap-3 items-center '>
                                        <span><StarRatings
                                        starRatedColor="#ff9017"
                                            rating={2.4}
                                            starDimension="20px"
                                            starSpacing="3px"
                                        /></span>
                                        <span className='text-green-500 font-medium' >Free Shipping</span>
                                    </div>
                                </div>
                                
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