import React, { useState } from 'react'
import AddressForm from '../../../components/AddressForm'
import ShowAddress from './ShowAddress';

const SavedAddress = () => {
  const [showAddress, setShowAddress] = useState(false)
  return (
    <div className='py-5 w-[50%] ' >
      <div>
        <h2 className='font-medium text-2xl text-center pb-10 flex items-center justify-center' > <img src="../location.jpg" className='h-20 w-28' alt="" /> Saved Address</h2>

        <ShowAddress  />
        <button className='bg-blue-400 text-white hover:bg-blue-600 w-full my-4 text-xl py-1 rounded-lg ' onClick={() => setShowAddress(!showAddress)} >Add a new Address</button>
        {showAddress ? <AddressForm setShowAddress={setShowAddress} /> : null}
      </div>
    </div>
  )
}

export default SavedAddress