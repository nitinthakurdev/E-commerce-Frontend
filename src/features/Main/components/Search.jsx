import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../../context'
import { Link } from 'react-router-dom'

const Search = () => {
    const {allProduct} = useProductContext()
    const [value ,setValue] = useState("")
    const [item,setItem] = useState([])
    const handleChange = () => {
        const filter = allProduct.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
        const data = value && allProduct && filter.map((item)=>({name:item.name,id:item._id}))
        setItem(data ? data : []) 
    }

    useEffect(()=>{
        handleChange()
    },[value])
    return (
        <div className="border-2 border-blue-500 h-full w-[35%] rounded-md  relative">
            <input
                type="text"
                className="px-2 h-full w-[75%]  focus:outline-none"
                placeholder="Search Product ..."
                onChange={(e)=>setValue(e.target.value)}
                value={value}
            />
            <button className="h-full w-[25%] bg-blue-500 text-white text-lg font-medium ">
                Search
            </button>
            <div className='absolute bg-gray-100 py-4 top-8 w-full rounded-md' >
                {item.map((item,index)=>(
                    <p  className='py-2  hover:bg-gray-200 px-4' key={index} ><Link to={`/productdetail/${item.id}`} onClick={()=>setValue("")}  >{item.name.slice(0,50)}...</Link></p>
                ))}
            </div>
        </div>
    )
}

export default Search