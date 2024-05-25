import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import BasicDetail from './components/BasicDetail'
import AllDetail from './AllDetail'
import { ProductCard } from '../../components/Cards'
import { useProductContext } from '../../../../context'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
  const {allProduct} = useProductContext()
  const location = useLocation()
  const id = location.pathname.replace("/productdetail/","")
  const filterdata = allProduct?.filter((item)=>item._id === id)[0]

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
      <BasicDetail data={filterdata} />
      <AllDetail data={filterdata} />
      </div>
      <div>
      <ProductCard data={allProduct} />
      </div>
      
    </div>
  )
}

export default ProductDetail