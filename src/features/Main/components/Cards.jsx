import React from "react";

export const OfferCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="border p-4 flex flex-col items-center justify-center "
          >
            <img className="h-[70%]" src={item.image} />
            <h2 className="text-sm text-center font-medium">{item.name}</h2>
            <div className="text-center  py-1">
              <span className="bg-red-300 rounded-md px-1">{item.discunt}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const ProductCard = ({ data }) => {
  return (
    <div className=" py-5" >
        <h2 className="font-medium text-2xl py-4 " >Recommended items</h2>
      <div className=" grid grid-cols-5 gap-5">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col justify-around items-center border py-3">
              <div>
                <img src={item.image} />
              </div>
              <div>
                <h2 className="font-medium text-lg ">{item.name}</h2>
                <h3 className="font-medium text-gray-600 ">Form Rs. 5000</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
