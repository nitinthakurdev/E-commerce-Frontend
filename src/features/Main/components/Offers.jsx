import React from 'react'
import { OfferCard } from './Cards'

const Offers = () => {
    const data = [
        {
            id:1,
            image:"./productimage/watch.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:2,
            image:"./productimage/laptop.png",
            name:"Smart Watches",
            discunt:"-15%"
        
        },
        {
            id:3,
            image:"./productimage/camra.png",
            name:"Smart Watches",
            discunt:"-40%"
        
        },
        {
            id:4,
            image:"./productimage/hearphone.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:5,
            image:"./productimage/phone.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        

    ]
    return (
        <div className=' py-3  bg-slate-100'>
            <div className='bg-white flex ' >
                <div className='p-5 w-[20%] ' >
                    <h2 className='font-medium text-lg ' >Deals and Offers</h2>
                    <p className='text-gray-500' >Hygiene equipments</p>
                    <div className='flex items-center gap-3 py-2' >
                        <div className=' w-12 rounded-md bg-[#606060] flex flex-col items-center text-white font-medium'>
                            <span>04 </span>
                            <span className='' >Days</span>
                        </div>
                        <div className='w-12 rounded-md bg-[#606060] flex flex-col items-center text-white font-medium'>
                            <span>13 </span>
                            <span className='' >Hour</span>
                        </div>
                        <div className='w-12 rounded-md bg-[#606060] flex flex-col items-center text-white font-medium'>
                            <span>34 </span>
                            <span className='' >Min</span>
                        </div>
                        <div className='w-12 rounded-md bg-[#606060] flex flex-col items-center text-white font-medium'>
                            <span>36 </span>
                            <span className='' >Sec</span>
                        </div>
                       
                    </div>

                    
                </div>
                <div className='p-5 w-[80%]  grid  grid-cols-5  ' >
                    <OfferCard data={data} />
                </div>
            </div>
        </div>
    )
}

export default Offers