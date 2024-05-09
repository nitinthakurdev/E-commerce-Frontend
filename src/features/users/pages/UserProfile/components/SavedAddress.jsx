import React, { useState } from 'react'
import AddressForm from '../../../components/AddressForm'

const SavedAddress = () => {
  const [showAddress,setShowAddress] = useState(false)
  return (
    <div className='py-5 w-[50%] ' >
      <div>
      <h2 className='font-medium text-2xl text-center pb-10 flex items-center justify-center' > <img src="../location.jpg" className='h-20 w-28' alt="" /> Saved Address</h2>
        
        <div className='py-2 bg-slate-100 px-5 rounded-lg '  >
          <div className='flex gap-3 py-2' >Nitin <span className='bg-gray-200 py-1 px-2 rounded-md' >Home</span></div>
          <div className='flex gap-3 ' >
            <span>1366, </span> <span>Shona road palwal , </span> <span>
              Palwal(city)
            </span>
            <span>
              Haryana(state)
            </span>
          </div>
          <p>9138257533</p>
        </div>
        <button className='bg-blue-400 text-white hover:bg-blue-600 w-full my-4 text-xl py-1 rounded-lg ' onClick={()=>setShowAddress(!showAddress)} >Add a new Address</button>
        {showAddress ? <AddressForm setShowAddress={setShowAddress}/> : null}
      </div>
    </div>
  )
}

export default SavedAddress