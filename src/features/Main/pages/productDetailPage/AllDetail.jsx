import React, { useState } from 'react'
import Description from './components/Description'
import Review from './components/Review'
import AboutSeller from './components/AboutSeller'

const AllDetail = ({data}) => {
  const [showDetails, setShowDetails] = useState(true)
  return (
    <div className='border-2 p-3 rounded-md' >
      <nav className='border-b-2 py-2' >
        <ul className='flex items-center gap-10' >
          <li ><button className={`border-2 rounded-md px-2 py-1 hover:bg-slate-200 ${showDetails  ? "bg-slate-200" : ""} `} onClick={()=>setShowDetails(true)} >Discription</button></li>
          <li><button className={`border-2 rounded-md px-2 py-1 hover:bg-slate-200 ${!showDetails ? "bg-slate-200" : ""}`} onClick={()=>setShowDetails(false)}  >Review</button></li>
        </ul>
      </nav>
      <div>
        {
          !showDetails ? <Review />
              : <Description data={data}/>
        }
      </div>
    </div>
  )
}

export default AllDetail