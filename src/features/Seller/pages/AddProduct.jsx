import React from 'react'

const AddProduct = () => {
    return (
        <>
            <div>
                <h2 className='text-2xl font-bold text-center py-3' >Add New Product </h2>
                <div className='px-10  flex justify-between' >
                    <div className='w-[45%] border py-5'  >
                        <div className="flex-1 items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <div className="items-center justify-center max-w-xl mx-auto">
                                    <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop"><span className="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg><span className="font-medium text-gray-600">Drop Image to Attach, or<span className="text-blue-600 underline ml-[4px]">browse</span></span></span><input type="file" name="file_upload" className="hidden" accept="image/png,image/jpeg" id="input" /></label>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-[50%] border px-5 py-5' >
                        <form className='flex flex-col gap-5 pb-10' >
                            <div>
                                <label htmlFor='pname' className='font-medium px-1 py-2 flex' >Product Name/Title</label>
                                <input type='text' id='pname' placeholder='Product Name/title' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                            </div>
                            <div>
                                <label htmlFor='dec' className='font-medium px-1 py-2 flex' >Discription</label>
                                <textarea type='text' id='dec' placeholder='Product Description' rows={5} className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' ></textarea>
                            </div>
                            <div className='' >
                            <label htmlFor='category' className='font-medium px-1 py-2 flex' >Category</label>
                                <select id='category' className='w-full border rounded-lg px-1 py-2  focus:outline-cyan-700' >
                                    <option value="select category"> select category</option>
                                    <option value="1">category 1</option>
                                </select>
                            </div>
                            <div className='flex justify-between' >

                                <div className='w-[45%]' >
                                    <label htmlFor='sku' className='font-medium px-1 py-2 flex' >Product SKU ID</label>
                                    <input type='text' id='sku' placeholder='Product SKU ID' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                </div>
                                <div className='w-[45%]'>
                                    <label htmlFor='material' className='font-medium px-1 py-2 flex' >Product Material</label>
                                    <input type='text' id='material' placeholder='Product Material' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                </div>
                            </div>
                            <div className='flex justify-between' >

                                <div className='w-[45%]' >
                                    <label htmlFor='mrp' className='font-medium px-1 py-2 flex' >Product MRP Price</label>
                                    <input type='text' id='mrp' placeholder='Product MRP Price' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                </div>
                                <div className='w-[45%]'>
                                    <label htmlFor='sell' className='font-medium px-1 py-2 flex' >Product Selling Price</label>
                                    <input type='text' id='sell' placeholder='Product Selling Price' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                </div>
                            </div>
                            
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddProduct