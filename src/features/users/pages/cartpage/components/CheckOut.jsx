import React from 'react'

const CheckOut = ({data}) => {
    const MRP = data?.reduce((i,b)=>i + b?.product_id?.mrp_price * b.product_qty,0)
    const discount = data?.reduce((i,b)=>(i + b?.product_id?.mrp_price - b?.product_id?.selling_price) * b.product_qty,0 )
    const Selling = data?.reduce((i,b)=>i + b?.product_id?.selling_price * b.product_qty,0)
    const payementImage = ["./payementLogo/american.png","./payementLogo/doco.png","./payementLogo/ipay.png","./payementLogo/paypal.png","./payementLogo/visa.png"]
  return (
    <div className='flex flex-col gap-5' >
        <div className='border-2 rounded-lg px-2 py-4' >
            <h2 className='pb-3' >Have a coupon?</h2>
            <div className='border-2 rounded-md overflow-hidden' ><input type="text" className='px-3 focus:outline-none py-1' /><button className='border-l-2 px-5 py-1 text-blue-500 font-medium  ' >Apply</button></div>
        </div>
        <div className='border-2 rounded-lg px-4 py-4' >
            <h3 className='text-gray-600 font-medium flex justify-between items-center' > <span>Subtotal : </span><span>₹{MRP}</span></h3>
            <h3 className='text-gray-600 font-medium flex justify-between items-center' > <span>Discount : </span><span className='text-red-500' >- ₹{discount}</span></h3>
            <h3 className='text-gray-600 font-medium flex justify-between items-center pb-5' > <span>Tax : </span><span className='text-green-500'  >Free</span></h3>
            <hr  />
            <h3 className=' font-bold flex justify-between items-center py-5' > <span>Total : </span><span className='text-green-500 text-xl ' > ₹{Selling}</span></h3>
            <button className='w-full bg-[#00b517] hover:bg-[#019914] text-white rounded-lg text-xl font-medium py-2 ' >Checkout</button>
            <div className='flex items-center justify-between py-3' >
                {payementImage.map((item,index)=>(
                    <img key={index} src={item} alt="payement Logo" />
                ))}
            </div>
        </div >
    </div>
  )
}

export default CheckOut