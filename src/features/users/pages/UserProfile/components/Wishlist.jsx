import React from 'react'

const Wishlist = () => {
  return (
    <div className='w-[70%]' >
      <h2 className='flex   items-center justify-center gap-3 py-5' ><img src='../heart.jpg' className='w-12' /><span className='font-medium text-2xl' >WishList</span></h2>
      <div className='grid grid-cols-4 ' >
        <div>
          <img src="../productimage/badSheet.png" className='w-28' alt="" />
        </div>
        <div className='flex items-center' >
          <span className='font-medium text-lg' >this is the best product </span>
        </div>
        <div className='flex items-center' >
          <span className='font-medium text-lg text-gray-600' >Blue</span>
        </div>
        <div className='flex flex-col justify-center gap-3' >
          <button className='border-2 rounded-lg py-1 hover:bg-blue-500 hover:text-white' >Add to cart</button>
          <button className='border-2 rounded-lg py-1 hover:bg-red-400 hover:text-white' >Remove to Wishlist</button>
          
        </div>
      </div>
    </div>
  )
}

export default Wishlist