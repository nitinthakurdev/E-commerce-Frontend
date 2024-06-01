import React, { useState } from "react";
import TrackOrder from "./TrackOrder";
import { useProductContext } from "../../../../../context";

const Order = () => {
  const [modal, setModal] = useState(false)
  const { order } = useProductContext()

  return (
    <div>
      <TrackOrder modal={modal} setModal={setModal} />
      <section className="py-10 relative">

        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto pt-5">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Order History
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thanks for making a purchase you can check our order summary from
            below
          </p>
          {
            order?.OrderedProduct?.slice().reverse().map((item, index) => (
              <div key={index} >
                {
                  item?.product?.slice().reverse().map((ite, ind) => {
                    console.log(ite)
                    const productData = item?.productDetails?.filter((i)=>i._id === ite.productId)[0]
                    // console.log(item.createdAt)
                    const  time = item?.createdAt?.split("T")[0]
                    const deliverydate = new Date(time)
                    deliverydate.setDate(deliverydate.getDate() + 2)
                   const delDate= deliverydate.toString().slice(0,16)


                    // console.log(productData)  
                    // console.log(ite)
                    return (
                      <div key={ind} className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">

                        <div className="w-full px-3 min-[400px]:px-6">
                          <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full cursor-pointer " onClick={() => setModal(true)}>
                            <div className="img-box max-lg:w-full">
                              <img
                                src={productData?.product_image[0]?.ImageUrl}
                                alt="Premium Watch image"
                                className="aspect-square w-full lg:max-w-[140px]"
                              />
                            </div>
                            <div className="flex flex-row items-center w-full ">
                              <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div className="flex items-center">
                                  <div className="">
                                    <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                     {productData.name?.slice(0,20)}...
                                    </h2>
                                    <div className="flex items-center ">
                                      <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                        Color: <span className="text-gray-500">{ite?.product_color}</span>
                                      </p>
                                      <p className="font-medium text-base leading-7 text-black ">
                                        Qty: <span className="text-gray-500">{ite?.product_qty}</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-5">
                                  <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                    <div className="flex gap-3 lg:block">
                                      <p className="font-medium text-sm leading-7 text-black">
                                        price
                                      </p>
                                      <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                                       Rs.{productData.selling_price}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                    <div className="flex gap-3 lg:block">
                                      <p className="font-medium text-sm leading-7 text-black">
                                        Status
                                      </p>
                                      <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                       {item?.delivery_status}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                    <div className="flex gap-3 lg:block">
                                      <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                        Delivered Time
                                      </p>
                                      <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                       {delDate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    )
                  })
                }
              </div>
            ))
          }

        </div>
      </section>
    </div>
  );
};

export default Order;
