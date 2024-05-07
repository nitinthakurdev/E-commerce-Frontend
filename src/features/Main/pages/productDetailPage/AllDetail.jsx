import React from 'react'
import Description from './components/Description'

const AllDetail = () => {
  return (
    <div className='border-2 p-3 rounded-md' >
        <nav className='border-b-2 py-2' >
            <ul className='flex items-center gap-10' >
                <li ><button className='border-2 rounded-md px-2 py-1 hover:bg-slate-200' >Discription</button></li>
                <li><button className='border-2 rounded-md px-2 py-1 hover:bg-slate-200' >Review</button></li>
                <li><button className='border-2 rounded-md px-2 py-1 hover:bg-slate-200' >Shipping</button></li>
                <li><button className='border-2 rounded-md px-2 py-1 hover:bg-slate-200' >About Seller</button></li>
            </ul>
        </nav>
        <div>
        <Description />
        </div>
    </div>
  )
}

export default AllDetail