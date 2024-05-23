import React, { useState } from 'react';
import { FaFolderOpen } from "react-icons/fa";


const ImageUploader = ({ data, setData }) => {
    const [image, setimage] = useState("")

    const handleChange = (e) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setimage(url)
        setData({ ...data, product_image: [...data.product_image, file] })
    }

    return (

        <div className=" bg-white ">
            <div className="max-w-md mx-auto rounded-lg overflow- border-2 md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full ">
                        <div className="relative  h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">

                            <div className="absolute">

                                {image ?
                                    <img src={image} className='h-full w-full  p-3' alt="" />
                                    : <div className="flex flex-col items-center">
                                        <FaFolderOpen className=" text-8xl  text-blue-700" />
                                        <span className="block text-gray-400 font-normal">Attach you files here</span>
                                    </div>}
                            </div>

                            <input type="file" className="h-full w-full opacity-0" name="" onChange={handleChange} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageUploader;
