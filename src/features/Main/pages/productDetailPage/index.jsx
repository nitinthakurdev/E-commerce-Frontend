import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import BasicDetail from './components/BasicDetail'
import AllDetail from './AllDetail'
import { ProductCard } from '../../components/Cards'

const ProductDetail = () => {
  const data2 = [
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
      <div>
      <ProductCard data={data2} />
      </div>
      
    </div>
  )
}

export default ProductDetail