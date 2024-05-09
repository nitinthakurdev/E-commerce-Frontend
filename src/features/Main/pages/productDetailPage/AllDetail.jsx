import React, { useState } from 'react'
import Description from './components/Description'
import Review from './components/Review'
import AboutSeller from './components/AboutSeller'

const AllDetail = () => {
  const [showDetails, setShowDetails] = useState(null)
  return (
    <div className='border-2 p-3 rounded-md' >
      <nav className='border-b-2 py-2' >
        <ul className='flex items-center gap-10' >
          <li ><button className={`border-2 rounded-md px-2 py-1 hover:bg-slate-200 ${showDetails === null ? "bg-slate-200" : ""} `} onClick={()=>setShowDetails(null)} >Discription</button></li>
          <li><button className={`border-2 rounded-md px-2 py-1 hover:bg-slate-200 ${showDetails === 1 ? "bg-slate-200" : ""}`} onClick={()=>setShowDetails(1)}  >Review</button></li>
          <li><button className={`border-2 rounded-md px-2 py-1 hover:bg-slate-200 ${showDetails === 2 ? "bg-slate-200" : ""}`} onClick={()=>setShowDetails(2)} >About Seller</button></li>
        </ul>
      </nav>
      <div>
        {
          showDetails === 1 ? <Review />
            : showDetails === 2 ? <AboutSeller />
              : <Description />
        }
      </div>
    </div>
  )
}

export default AllDetail