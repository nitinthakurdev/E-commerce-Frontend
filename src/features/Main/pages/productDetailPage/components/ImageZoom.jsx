import React, { useState } from 'react'

const ImageZoom = ({ image }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [showZoom, setShowZoom] = useState(false)
    const [courserPosition, setCourserPosition] = useState({ x: 0, y: 0 })

    const HandleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.pageX - left) / width) * 100
        const y = ((e.pageY - top) / height) * 100
        setPosition({ x, y })
        setCourserPosition({ x: e.pageX - left, y: e.pageY - top })
    }

    return (
        <div className='w-full z-10 flex justify-center items-center border-2 rounded-md py-4' >

            <div className='relative'
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={HandleMove}
            >
                <img src={image} className='h-[300px] w-[350px] cursor-crosshair' alt="" />
                {showZoom && <div style={{ position: "absolute", left: `${courserPosition.x - 125}px`, top: `${courserPosition.y - 300}px`, pointerEvents: "none" }} >
                    <div className='h-[250px] w-[250px] border-2' style={{ backgroundImage: `url(${image})`, backgroundPosition: `${position.x}% ${position.y - 50}%`, backgroundSize: '300%', }} ></div>
                </div>}
            </div>
        </div>
    )
}

export default ImageZoom
