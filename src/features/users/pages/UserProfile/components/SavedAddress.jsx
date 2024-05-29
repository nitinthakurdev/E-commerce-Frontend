import React, { useState } from 'react'
import AddressForm from '../../../components/AddressForm'
import { useComponentContext } from '../../../../../context'
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";

const SavedAddress = () => {
  const { addressData,DeleteAddress,disable } = useComponentContext()
  const [showAddress, setShowAddress] = useState(false)
  return (
    <div className='py-5 w-[50%] ' >
      <div>
        <h2 className='font-medium text-2xl text-center pb-10 flex items-center justify-center' > <img src="../location.jpg" className='h-20 w-28' alt="" /> Saved Address</h2>

        {addressData?.map((item, index) => (
          <div key={index} className='py-2 bg-slate-100 px-5 rounded-lg my-3'  >
            <div className='flex justify-between py-2' ><span>{item.fullname} <span className='bg-gray-200 py-1 px-2 rounded-md' >{item.type}</span></span> 
            <span className='flex gap-2' >
              <button  className='hover:bg-gray-300  px-3 py-2 rounded-md text-lg' disabled={disable} onClick={()=>DeleteAddress(item._id)} ><MdDelete /></button>
              <button  className='hover:bg-gray-300  px-3 py-2 rounded-md text-lg'  ><RiEditFill /></button>
              </span></div>
            <div className='flex gap-3 ' >
              <span>{item.houseNo}, </span> <span>{item.area} , </span> <span>
                {item.city}, {item.state}, {item.country}
              </span>

            </div>
            <p>
              <span>
                {item.phoneNo1}, {item.phoneNo2}  
              </span>
             

            </p>
          </div>
        ))}
        <button className='bg-blue-400 text-white hover:bg-blue-600 w-full my-4 text-xl py-1 rounded-lg ' onClick={() => setShowAddress(!showAddress)} >Add a new Address</button>
        {showAddress ? <AddressForm setShowAddress={setShowAddress} /> : null}
      </div>
    </div>
  )
}

export default SavedAddress