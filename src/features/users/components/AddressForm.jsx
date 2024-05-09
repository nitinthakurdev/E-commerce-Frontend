import React from 'react'

const AddressForm = ({setShowAddress}) => {
    return (
        <div className='flex  flex-col gap-5' >
            <div className='flex flex-col' >
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id='fullname' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
            </div>
            <div className='flex flex-col' >
                <label htmlFor="phone">Phone No. 1</label>
                <input type="text" id='phone' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
            </div>
            <div className='flex flex-col' >
                <label htmlFor="phone1">Phone No. 2</label>
                <input type="text" id='phone1' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
            </div>
            <div className='flex gap-10' >
                <div className='flex flex-col' >
                    <label htmlFor="pin">Pincode</label>
                    <input type="text" id='pin' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                </div>
                <div className='flex flex-col' >
                    <label htmlFor="phone">Phone No.</label>
                    <input type="text" id='phone' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                </div>

            </div>
            <div className='flex gap-10' >
                <div className='flex flex-col' >
                    <label htmlFor="pin">State</label>
                    <input type="text" id='pin' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                </div>
                <div className='flex flex-col' >
                    <label htmlFor="phone">City</label>
                    <input type="text" id='phone' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                </div>

            </div>
            <div className='flex flex-col' >
                <label htmlFor="phone">House No. , Building Name</label>
                <input type="text" id='phone' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
            </div>
            <div className='flex flex-col' >
                <label htmlFor="phone">Road name, Area ,Colony</label>
                <input type="text" id='phone' className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
            </div>
            <div className='' >
                <h2>Type of address</h2>
                <div className='flex gap-10 pt-3 items-center' >

                    <label className=" flex gap-2 items-center cursor-pointer ">
                        <input type="radio" name="Country" />
                        <span className='bg-gray-200 rounded-md py-1 px-2' > Home</span>
                    </label>
                    <label className=" flex gap-2 items-center cursor-pointer ">
                        <input type="radio" name="Country" />
                        <span className='bg-gray-200 rounded-md py-1 px-2' > Work</span>
                    </label>
                </div>

            </div>
            <div className='flex gap-10' >
            <button className='text-lg font-medium border-2 px-3 hover:bg-blue-600 hover:text-white py-1 rounded-lg' >Save</button>
            <button className='text-lg font-medium border-2 px-3 bg-blue-600 text-white py-1 rounded-lg hover:bg-white hover:text-black ' onClick={()=>setShowAddress(false)} >Cancel</button>

            </div>


        </div>
    )
}

export default AddressForm