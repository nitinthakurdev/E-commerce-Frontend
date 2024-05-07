import React from 'react'

const Filter = () => {
    return (
        <>
            <aside className="w-[17%] ">

                <div className=" p-3" >
                    <h2 className="py-2 font-medium text-lg" >Category</h2>
                    <ul className="flex flex-col gap-2 px-2 " >
                        <li className="cursor-pointer" >Mobile</li>
                        <li className="cursor-pointer" >Electronics</li>
                        <li className="cursor-pointer" >SmartPhone</li>
                        <li className="cursor-pointer" >iPhone</li>
                    </ul>
                    <button className="text-blue-600 my-3 " >see all...</button>
                </div>
                <hr />
                <div className=" p-3" >
                    <h2 className="py-2 font-medium text-lg" >Brand</h2>
                    <ul className="flex flex-col gap-2 px-2 " >
                        <li className="cursor-pointer select-none" >
                            <input type='checkBox' id="aple" /> <label htmlFor='aple' >Apple</label>
                        </li>
                        <li className="cursor-pointer select-none" >
                            <input type='checkBox' id="po" /> <label htmlFor='po' >Poco</label>
                        </li>
                        <li className="cursor-pointer select-none" >
                            <input type='checkBox' id="sum" /> <label htmlFor='sum' >Sumsung</label>
                        </li>
                        <li className="cursor-pointer select-none" >
                            <input type='checkBox' id="op" /> <label htmlFor='op' >Oppo</label>
                        </li>

                    </ul>
                    <button className="text-blue-600 my-3 " >see all...</button>
                </div>
                <hr />
                <div className=" p-3" >
                    <h2 className="py-2 font-medium text-lg" >Price</h2>
                    <input type="range" min={0} max={10000} />
                    <div className=' flex items-center justify-between gap-3'>
                        <div className='flex flex-col items-center w-[50%]' >
                            <span>Min</span>
                            <input type="number" placeholder='0' className='border-2 w-full px-2 border-gray-500' />
                        </div>
                        <div className='flex flex-col items-center w-[50%]' >
                            <span>Max</span>
                            <input type="number" placeholder='10000' className='border-2 w-full  px-2 border-gray-500' />
                        </div>

                    </div>
                </div>
                <hr />
                <div className=" p-3" >
                    <h2 className="py-2 font-medium text-lg" >Condition</h2>
                   

                        <div>
                            <label className="flex gap-3 bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                <input type="radio" name="Country" />
                                <span> Any</span>
                            </label>
                            <label className="flex gap-3 bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                <input type="radio" name="Country" />
                                <span> Refurbished</span>
                            </label>
                            <label className="flex gap-3 bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                <input type="radio" name="Country" />
                                <span> Brand New </span>
                            </label>
                            <label className="flex gap-3 bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                <input type="radio" name="Country" />
                                <span> Old Item</span>
                            </label>
                    </div>
                </div>
                <hr/>
                <div className=" p-3" >
                    <h2 className="py-2 font-medium text-lg" >Rating</h2>       
                </div>
            </aside>
        </>
    )
}

export default Filter