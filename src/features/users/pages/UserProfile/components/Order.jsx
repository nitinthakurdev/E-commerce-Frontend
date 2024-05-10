import React, { useState } from "react";
import TrackOrder from "./TrackOrder";

const Order = () => {
  const [modal,setModal] = useState(false)
  return (
    <div>
      <TrackOrder modal={modal} setModal={setModal} />
      <section class="py-10 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Current Order
          </h2>
          <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thanks for making a purchase you can check our order summary frm
            below
          </p>
          <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            
            <div class="w-full px-3 min-[400px]:px-6">
              <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full cursor-pointer " onClick={()=>setModal(true)} >
                <div class="img-box max-lg:w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167607.png"
                    alt="Premium Watch image"
                    class="aspect-square w-full lg:max-w-[140px]"
                  />
                </div>
                <div class="flex flex-row items-center w-full ">
                  <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div class="flex items-center">
                      <div class="">
                        <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                          Premium Quality Dust Watch
                        </h2>
                        <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                          By: Dust Studios
                        </p>
                        <div class="flex items-center ">
                          <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                            Size: <span class="text-gray-500">100 ml</span>
                          </p>
                          <p class="font-medium text-base leading-7 text-black ">
                            Qty: <span class="text-gray-500">2</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-5">
                      <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm leading-7 text-black">
                            price
                          </p>
                          <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                            $100
                          </p>
                        </div>
                      </div>
                      <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm leading-7 text-black">
                            Status
                          </p>
                          <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                            Ready for Delivery
                          </p>
                        </div>
                      </div>
                      <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                            Expected Delivery Time
                          </p>
                          <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                            23rd March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>

        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto pt-5">
          <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Order History
          </h2>
          <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thanks for making a purchase you can check our order summary frm
            below
          </p>
          <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            
            <div class="w-full px-3 min-[400px]:px-6">
              <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full cursor-pointer " onClick={()=>setModal(true)}>
                <div class="img-box max-lg:w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167607.png"
                    alt="Premium Watch image"
                    class="aspect-square w-full lg:max-w-[140px]"
                  />
                </div>
                <div class="flex flex-row items-center w-full ">
                  <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div class="flex items-center">
                      <div class="">
                        <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                          Premium Quality Dust Watch
                        </h2>
                        <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                          By: Dust Studios
                        </p>
                        <div class="flex items-center ">
                          <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                            Size: <span class="text-gray-500">100 ml</span>
                          </p>
                          <p class="font-medium text-base leading-7 text-black ">
                            Qty: <span class="text-gray-500">2</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-5">
                      <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm leading-7 text-black">
                            price
                          </p>
                          <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                            $100
                          </p>
                        </div>
                      </div>
                      <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm leading-7 text-black">
                            Status
                          </p>
                          <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                            Delivered
                          </p>
                        </div>
                      </div>
                      <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                             Delivered Time
                          </p>
                          <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                            23rd March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
