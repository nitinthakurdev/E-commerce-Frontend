import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Filter from "./components/Filter";
import ListView from "./components/ListView";
import ProductList from "./components/ProductList";
import ProductGrid from "./components/ProductGrid";

const ProductSummery = () => {

    const [list,setList] = useState(true)

    const data = [
        {
            id:1,
            image:"./productimage/watch.png",
            name:"Smart Watches",
            discunt:"25%",
            mrpPrice:"3000",
            sellingPrice:"2599",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet, quibusdam soluta velit voluptatum asperiores aliquam suscipit magni vel id, pariatur explicabo molestiae officia enim.pariatur explicabo molestiae officia enim,",
            rating:2.5
        
        },
        {
            id:2,
            image:"./productimage/laptop.png",
            name:"Smart Watches",
            discunt:"15%",
            mrpPrice:"3000",
            sellingPrice:"2599",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet, quibusdam soluta velit voluptatum asperiores aliquam suscipit magni vel id, pariatur explicabo molestiae officia enim.pariatur explicabo molestiae officia enim,",
            rating:3.8
        
        },
        {
            id:3,
            image:"./productimage/camra.png",
            name:"Smart Watches",
            discunt:"40%",
            mrpPrice:"3000",
            sellingPrice:"2599",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet, quibusdam soluta velit voluptatum asperiores aliquam suscipit magni vel id, pariatur explicabo molestiae officia enim.pariatur explicabo molestiae officia enim,",
            rating:3.5
        
        },
        {
            id:4,
            image:"./productimage/hearphone.png",
            name:"Smart Watches",
            discunt:"25%",
            mrpPrice:"3000",
            sellingPrice:"2599",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet, quibusdam soluta velit voluptatum asperiores aliquam suscipit magni vel id, pariatur explicabo molestiae officia enim.pariatur explicabo molestiae officia enim,",
            rating:2.8
        
        },
        {
            id:5,
            image:"./productimage/phone.png",
            name:"Smart Watches",
            discunt:"25%",
            mrpPrice:"3000",
            sellingPrice:"2599",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet, quibusdam soluta velit voluptatum asperiores aliquam suscipit magni vel id, pariatur explicabo molestiae officia enim.pariatur explicabo molestiae officia enim,",
            rating:4.1
        
        },
        

    ]


  return (
    <div className="px-10 py-3">
      <nav className="flex py-3" aria-label="Breadcrumb">
        <ol className="flex items-center gap-3 justify-center">
          <li className="flex items-center ">Home</li>
          <li className="flex items-center gap-2 ">
            <IoIosArrowForward />
            Category
          </li>
          <li className="flex items-center gap-2 ">
            <IoIosArrowForward />
            <span>Product List</span>
          </li>
        </ol>
      </nav>
      <div className="flex justify-between py-3" >
        <Filter/>
        <div className=" w-[80%]" >
        <ListView setList={setList} list={list}/>
        {list ? <ProductList data={data} /> :
        <ProductGrid data={data}  />}
        </div>
      </div>
    </div>
  );
};

export default ProductSummery;
