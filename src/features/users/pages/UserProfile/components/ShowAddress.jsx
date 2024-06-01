import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { useComponentContext } from '../../../../../context';
import { useLocation } from 'react-router-dom';

const ShowAddress = ({data,setData}) => {
    const { addressData,DeleteAddress,disable } = useComponentContext()
    const location = useLocation()
    const [ind,setindex] = useState(null)
    const handleAddress = (ind,id)=>{
        setindex(ind)
        if(location.pathname === "/cart"){
            setData({...data,address_id:id})
        }
    }
  return (
    <div>
         {addressData?.map((item, index) => (
          <div key={index} className={`${index === ind || data?.address_id === item._id ? "bg-slate-300" : null} py-2 cursor-pointer  bg-slate-100 px-5 rounded-lg my-3`} onClick={()=>handleAddress(index,item._id)}  >
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
    </div>
  )
}

export default ShowAddress