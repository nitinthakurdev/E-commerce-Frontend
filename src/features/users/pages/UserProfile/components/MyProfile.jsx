import React, { useState } from 'react'
import { useAuthContext } from '../../../../../context'

const MyProfile = () => {
  const {user,UpdateUser} = useAuthContext()
  const [edit,setEdit] = useState(true)

  const [value,setValue] = useState({
    fullName:"",
    phone:"",
    gender:"",
  })

  const data = {
    fullName:value.fullName || user?.fullName,
    phone:value.phone || user?.phone || "" ,
    gender:value.gender || user?.gender || "none" ,
  }

  const handleUser = () => {
    UpdateUser(data)
    setEdit(true)
  }


  return (
    <div className='py-5 w-[50%] ' >
      <div>
        <h2 className='font-medium text-2xl text-center pb-10 flex items-center justify-center' > <img src="./profile.jpg" className='h-20 w-20' alt="" /> User Information</h2>
        <div className='flex flex-col gap-10'>
          <div className=' flex items-center gap-10  ' >
            <input type="text"  placeholder='Full Name' onChange={(e)=>setValue({...value,fullName:e.target.value})} defaultValue={user?.fullName}  disabled={edit} className='border-2  w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
            <input type="text" placeholder='username' defaultValue={user?.username} disabled className='border-2 w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
          </div>
          <div >
            <input type="text" placeholder="Email" defaultValue={user?.email} disabled className='border-2 w-[85%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 '  />
          </div>
          <div className=' flex items-center  gap-10  '>
            <input type="number" maxLength={10} defaultValue={user?.phone} onChange={(e)=>setValue({...value,phone:e.target.value})}  placeholder='Phone Number' disabled={user?.phone ? true : edit} className='border-2 w-[40%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 ' />
           
          </div>
          <div className=' flex items-center  '>
            <select name="" id="" defaultValue={user?.gender} onChange={(e)=>setValue({...value,gender:e.target.value})}  disabled={edit} className='border-2 w-[85%] py-1 text-lg rounded-md px-3 focus:outline-indigo-600 '>
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
               <button className='border-2 py-1 px-3 text-gray-500 hover:bg-blue-500 hover:text-white font-medium rounded-md' onClick={handleUser} >Save</button>
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