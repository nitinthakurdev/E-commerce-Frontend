import React from 'react'
import CartProduct from './components/CartProduct'

const CartPage = () => {
  return (
    <div className='px-20 py-3' >
      <h2 className='font-medium text-2xl ' >My cart (2)</h2>
      <CartProduct />
    </div>
  )
}

export default CartPage