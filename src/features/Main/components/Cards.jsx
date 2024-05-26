import React from "react";
import { Link } from "react-router-dom";

export const OfferCard = ({ data }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <>
      {data?.map((item, index) => {
        const discountedAmount = item.mrp_price - item.selling_price
        const discount = (discountedAmount*100/item.mrp_price).toFixed()
        
        return (
          <Link to={`/productdetail/${item._id}`} onClick={scrollToTop} key={index} className="border p-4 flex flex-col items-center justify-center " >
            <div>
              <img className="h-[70%]" src={item.product_image[0].ImageUrl} />
              <h2 className="text-sm text-center font-medium">{item.name.slice(0,20)}...</h2>
              <div className="text-center  py-1">
                <span className="bg-red-300 rounded-md px-1">{discount}%</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export const ProductCard = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };
  return (
    <div className=" py-5" >
      <h2 className="font-medium text-2xl py-4 " >Recommended items</h2>
      <div className=" grid grid-cols-5 gap-5">
        {data?.map((item, index) => {
          return (
            <Link to={`/productdetail/${item._id}`} onClick={scrollToTop} key={index} className="flex flex-col justify-around items-center border py-3 px-3" >
              <div >
                <div>
                  <img src={item?.product_image[0]?.ImageUrl} />
                </div>
                <div>
                  <h2 className="font-medium text-lg ">{item?.name.slice(0,20)}...</h2>
                  <h3 className="font-medium text-gray-600 ">Form Rs. {item.selling_price}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
