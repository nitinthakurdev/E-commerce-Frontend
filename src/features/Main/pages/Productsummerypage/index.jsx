import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Filter from "./components/Filter";
import ListView from "./components/ListView";
import ProductList from "./components/ProductList";
import ProductGrid from "./components/ProductGrid";
import { useProductContext } from "../../../../context";

const ProductSummery = () => {
  const {allProduct} = useProductContext()

    const [list,setList] = useState(true)

    


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
        {list ? <ProductList data={allProduct} /> :
        <ProductGrid data={allProduct}  />}
        </div>
      </div>
    </div>
  );
};

export default ProductSummery;
