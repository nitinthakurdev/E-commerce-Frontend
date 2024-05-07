import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { PiGridFourFill } from "react-icons/pi";

const ListView = ({setList}) => {
  return (
    <div className='px-2 py-2 border border-gray-400 rounded-md flex justify-between items-center' >
        <div>
            <span  >1200 Items in <b>Mobile</b> </span>
        </div>
        <div className='flex  gap-3 items-center' >
            <select className='border-2 w-36 py-1 rounded-md px-2 focus:outline-none ' >
                <option>select </option>
                <option>hindi</option>
                <option>english</option>
            </select>
            <div className='flex items-center border-2 border-gray-500 rounded-md text-2xl overflow-hidden' >
                <span className='px-1 border-r cursor-pointer hover:bg-slate-200 ' onClick={()=>setList(false)} >
                <PiGridFourFill />
                </span>
                <span className='px-1 border-l cursor-pointer hover:bg-slate-200 ' onClick={()=>setList(true)}  >
                <VscThreeBars />
                </span>
            </div>
        </div>
    </div>
  )
}

export default ListView