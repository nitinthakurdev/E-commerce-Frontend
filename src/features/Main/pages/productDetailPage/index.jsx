import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import BasicDetail from './components/BasicDetail'
import AllDetail from './AllDetail'

const ProductDetail = () => {
  return (
    <div className="px-10 py-3">
      <nav className="flex py-3" aria-label="Breadcrumb">
        <ol className="flex items-center gap-3 justify-center">
          <li className="flex items-center cursor-pointer ">Home</li>
          <li className="flex items-center gap-2 cursor-pointer">
            <IoIosArrowForward />
            Category
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <IoIosArrowForward />
            <span>Product</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer ">
            <IoIosArrowForward />
            <span>Product Details</span>
          </li>
        </ol>
      </nav>
      <div>
      <BasicDetail />
      <AllDetail />
      </div>
      
    </div>
  )
}

export default ProductDetail