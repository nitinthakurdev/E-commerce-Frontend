import React from 'react'

const CartCard = () => {
    return (
        <>
            <div className='flex border-2 gap-5 py-2 px-2 my-3' >
                <div className='h-24 w-24' >
                    <img src="./productimage/badSheet.png" className='size-full' alt="" />
                </div>
                <div className='w-[80%]' >
                    <div className='flex justify-between items-center' >
                        <span className='text-lg font-medium ' >this is osme project created by me </span>
                        <span className='text-lg font-medium' >Rs.5000</span>
                    </div>
                    <div className='py-2 flex flex-col gap-1' >
                        <span className='text-gray-500' >Color:blue , Material : Plastic</span>
                        <div className=' flex justify-between'>
                            <span className='text-gray-500' >Qty:1</span>
                            <select className='w-36 px-3 border-2 rounded-lg py-1 focus:outline-none' >
                                <option value={1} >Qty : 1</option>
                                <option value={2}  >Qty : 2</option>
                                <option value={3}  >Qty : 3</option>
                                <option value={4}  >Qty : 4</option>
                                <option value={5}  >Qty : 5</option>
                            </select>
                        </div>
                    </div>
                    <div className=' flex gap-5 py-1 ' >
                        <button className='px-3 py-1 border text-red-500 hover:bg-red-500 hover:text-white rounded-lg ' > Remove</button>
                        <button className='px-3 py-1 border text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg' > Save for Later</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard