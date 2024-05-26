import React from 'react'
import CartProduct from './components/CartProduct'
import { useComponentContext } from '../../../../context'

const CartPage = () => {
  const {cartData} = useComponentContext()
  return (
    <div className='px-20 py-3' >
      <h2 className='font-medium text-2xl ' >My cart ({cartData.length})</h2>
      <CartProduct data={cartData}  />
    </div>
  )
}

export default CartPage