import React, { useEffect, useState } from 'react'

const Rewards = () => {

  const [copy,setCopy] = useState(false)

  useEffect(()=>{
    if(copy){
      setTimeout(()=>{
        setCopy(false)
      },2000)
    }
  },[copy])

  return (
    <div className=' w-[70%] py-3 flex flex-col gap-5 max-h-screen overflow-y-scroll ' >
      
      <div >
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
          <img src="https://i.postimg.cc/KvTqpZq9/uber.png" className="w-10 mx-auto mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-4">20% flat off on all rides within the cityusing HDFC Credit Card</h3>
            <div className="flex items-center space-x-2 mb-6">
              <span id="cpnCode" className="border-dashed border text-white px-4 py-2 rounded-l">STEALDEAL20</span>
              <span id="cpnBtn" className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer" onClick={()=>{navigator.clipboard.writeText("STEALDEAL20");setCopy(true)}} >{copy ? "Copied Code" : "Copy Code"}</span>
            </div>
            <p className="text-sm">Valid Till: 20Dec, 2021</p>
        </div>
      </div>
      
    </div>
  )
}

export default Rewards