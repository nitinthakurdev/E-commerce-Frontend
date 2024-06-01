import React from "react";

const TrackOrder = ({modal,setModal}) => {
  return (
    <>
      <div className={`font-sans ${modal ? "flex" : "hidden"} bg-gray-100  items-center justify-center h-screen"`}>
        <div x-data="{ showPrivacyPolicy: true }">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            
            Order Detail
          </button>

          <div
            x-show="showPrivacyPolicy"
            className="fixed z-10 inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4"
              
            >
              <div className="px-6 py-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  
                  Order Detail
                </h3>
              </div>
              <div
                className="prose max-w-screen-md p-6 overflow-y-auto"
                style={{
                  maxHeight: "70vh",
                  backgroundColor: "#fff",
                  border: " 1px solid #e2e8f0",
                  borderRadius: " 0.375rem",
                  boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                  <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
                    <h3 className="text-xl font-semibold text-gray-900 ">
                      Order history
                    </h3>

                    <ol className="relative ms-3 border-s border-gray-200 ">
                      <li className="mb-10 ms-6">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white ">
                          <svg
                            className="h-4 w-4 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                            />
                          </svg>
                        </span>
                        <h4 className="mb-0.5 text-base font-semibold text-gray-900 ">
                          Estimated delivery in 24 Nov 2023
                        </h4>
                        <p className="text-sm font-normal text-gray-500 ">
                          Products delivered
                        </p>
                      </li>

                      <li className="mb-10 ms-6">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white ">
                          <svg
                            className="h-4 w-4 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                            />
                          </svg>
                        </span>
                        <h4 className="mb-0.5 text-base font-semibold text-gray-900 ">
                          Today
                        </h4>
                        <p className="text-sm font-normal text-gray-500 ">
                          Products being delivered
                        </p>
                      </li>

                      <li className="mb-10 ms-6 text-primary-700 ">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white ">
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 11.917 9.724 16.5 19 7.5"
                            />
                          </svg>
                        </span>
                        <h4 className="mb-0.5 font-semibold">23 Nov 2023, 15:15</h4>
                        <p className="text-sm">
                          Products in the courier's warehouse
                        </p>
                      </li>

                      <li className="mb-10 ms-6 text-primary-700 ">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white ">
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 11.917 9.724 16.5 19 7.5"
                            />
                          </svg>
                        </span>
                        <h4 className="mb-0.5 text-base font-semibold">
                          22 Nov 2023, 12:27
                        </h4>
                        <p className="text-sm">
                          Products delivered to the courier - DHL Express
                        </p>
                      </li>

                      <li className="mb-10 ms-6 text-primary-700 ">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white ">
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 11.917 9.724 16.5 19 7.5"
                            />
                          </svg>
                        </span>
                        <h4 className="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
                        <p className="text-sm">
                          Payment accepted - VISA Credit Card
                        </p>
                      </li>

                      <li className="ms-6 text-primary-700 ">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white ">
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 11.917 9.724 16.5 19 7.5"
                            />
                          </svg>
                        </span>
                        <div>
                          <h4 className="mb-0.5 font-semibold">
                            19 Nov 2023, 10:45
                          </h4>
                          <a
                            href="#"
                            className="text-sm font-medium hover:underline"
                          >
                            Order placed - Receipt #647563
                          </a>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  hover:text-black hover:bg-white sm:w-auto sm:text-sm"
                >
                  
                  Cancel the Order
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md  border-transparent shadow-sm px-4 py-2 border-2 text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:text-white hover:bg-black  sm:w-auto sm:text-sm"
                  onClick={()=>setModal(false)}
                >
                  
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
