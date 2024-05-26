import React from 'react'
import StarRatings from 'react-star-ratings'
import { useComponentContext } from '../../../../../context'

const Review = () => {
    const {reviews} = useComponentContext()
    return (

        <>
            <div className='max-h-screen overflow-y-scroll' >
              {reviews?.map((item,index)=>{
                return (
                    <div key={index} className="flex py-3 px-5 items-start ">
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />

                            </div>

                            <div className='absolute bottom-0 right-0 h-6 w-6 bg-white rounded-full ' >

                                <img src="../bluetick.png" className='size-full' alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="ml-6">
                        <p className="flex items-baseline">
                            <span className="text-gray-600 font-bold capitalize ">{item?.user_id?.username}</span>
                            <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
                        </p>
                       
                        <span>
                            <StarRatings
                                starRatedColor="#ff9017"
                                rating={item.rating}
                                starDimension="14px"
                                starSpacing="2px"
                            />
                        </span>

                        <div className="mt-3">
                            <span className="font-bold">{item.title}</span>
                            <p className="mt-1">{item.descrition}</p>
                        </div>
                        <div className="flex items-center justify-end mt-4 text-sm text-gray-600 fill-current">
                           
                            <div className="flex items-center">
                                <span>Was this review helplful?</span>
                                <button className="flex items-center ml-6">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                                    <span className="ml-2">56</span>
                                </button>
                                <button className="flex items-center ml-4">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                                    <span className="ml-2">10</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )
              })}
            </div>
        </>

    )
}

export default Review