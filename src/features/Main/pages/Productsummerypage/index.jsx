import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Filter from "./components/Filter";
import ListView from "./components/ListView";
import ProductList from "./components/ProductList";
import ProductGrid from "./components/ProductGrid";
import { useProductContext } from "../../../../context";
import { useLocation } from "react-router-dom";

const ProductSummery = () => {
  const { allProduct } = useProductContext();
  const [list, setList] = useState(true);
  const query = new URLSearchParams(useLocation().search);

  const [Product, setProduct] = useState([]);

  const filterData = () => {
    let filteredProducts = allProduct;

    const category = query.get("category");
    if (category) {
      filteredProducts = filteredProducts?.filter(
        (item) => item.product_category?.category_name === category
      );
    }

    const brand = query.get("brand");
    if (brand) {
      filteredProducts = filteredProducts?.filter(
        (item) => item.product_brand === brand
      );
    }

    const lowPrice = query.get("pricing[low]");
    const highPrice = query.get("pricing[high]");
    if (lowPrice && highPrice) {
      filteredProducts = filteredProducts?.filter(
        (item) => item.selling_price >= parseFloat(lowPrice) && item.selling_price <= parseFloat(highPrice)
      );
    }

    const condition = query.get("condition");
    if (condition && condition !== "Any") {
      filteredProducts = filteredProducts?.filter(
        (item) => item.product_type?.toLowerCase() === condition.toLowerCase()
      );
    }

    setProduct(filteredProducts);
  };

  useEffect(() => {
    filterData();
  }, [query, allProduct]);

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
      <div className="flex justify-between py-3">
        <Filter />
        <div className="w-[80%]">
          <ListView setList={setList} list={list} />
          {list ? (
            <ProductList data={Product} />
          ) : (
            <ProductGrid data={Product} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSummery;
