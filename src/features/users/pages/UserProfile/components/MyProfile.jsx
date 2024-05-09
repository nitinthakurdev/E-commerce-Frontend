import React, { useState } from 'react'

const MyProfile = () => {
  const [edit,setEdit] = useState(true)
  return (
    <div className='py-5 w-[50%] ' >
      <div>
        <h2 className='font-medium text-2xl text-center pb-10 flex items-center justify-center' > <img src="./profile.jpg" className='h-20 w-20' alt="" /> User Information</h2>
        <div className='flex flex-col gap-10'>
          <div className=' flex items-center gap-10  ' >
            <input type="text"  placeholder='Full Name' disabled={edit} className='border-2  w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
            <input type="text" placeholder='username' disabled className='border-2 w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
          </div>
          <div >
            <input type="text" placeholder="Email" disabled className='border-2 w-[85%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 '  />
          </div>
          <div className=' flex items-center  gap-10  '>
            <input type="number"  placeholder='Phone Number' disabled={edit} className='border-2 w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
            <input type="date" placeholder='DOB' disabled={edit} className='border-2 w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
          </div>
          <div className=' flex items-center  '>
            <select name="" id="" disabled={edit} className='border-2 w-[85%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 '>
              <option value="none">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className=' flex items-center gap-10  '>
            {
              edit ? 
              <button className='border-2 py-1 px-3 text-gray-500 hover:bg-blue-500  hover:text-white font-medium rounded-md' onClick={()=>setEdit(false)} >Edit</button>
              :
              <>
               <button className='border-2 py-1 px-3 text-gray-500 hover:bg-blue-500 hover:text-white font-medium rounded-md' >Save</button>
            <button className='border-2 py-1 px-3 text-gray-500 hover:bg-gray-200  font-medium rounded-md' onClick={()=>setEdit(true)} >Cancel</button>
              </>
            }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile