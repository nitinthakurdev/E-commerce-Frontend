import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";

const Description = () => {
    return (
        <div className='py-3 px-2 text-justify max-h-screen overflow-y-scroll ' >
            <p className='text-gray-600 ' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, alias accusamus eos magnam excepturi modi maxime itaque ipsum ipsam rem repellendus quaerat, soluta est numquam cum voluptatibus quisquam in blanditiis ullam inventore praesentium deleniti? Animi nulla quidem accusantium inventore soluta! Sint modi ipsa ipsam perferendis, repellendus quaerat! Alias deserunt est explicabo dicta, dolorum nam, maiores enim odit odio assumenda, perferendis recusandae dolorem fugiat! Odio corrupti atque eligendi facilis amet voluptatem voluptate voluptatibus cum consequuntur facere laborum id nisi illo et ex labore ratione, iste numquam ullam rerum nesciunt soluta ut recusandae excepturi. Cum voluptatum minus enim, cupiditate debitis voluptatibus sunt?</p>
            <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden max-w-sm  my-5">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Model</td>
                            <td className="py-3 px-4 text-left">#123456</td>
                        </tr>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">style</td>
                            <td className="py-3 px-4 text-left">Modern</td>
                        </tr>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Dimantion</td>
                            <td className="py-3 px-4 text-left">34mm x 35mm x 43mm</td>
                        </tr>
                        <tr  >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Calories</td>
                            <td className="py-3 px-4 text-left">240</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            <div className='flex flex-col justify-between ' >
                <span className='flex items-center gap-4' ><IoCheckmarkSharp />Here is some other feature</span>
                <span className='flex items-center gap-4' ><IoCheckmarkSharp />Here is some best information </span>
                <span className='flex items-center gap-4' ><IoCheckmarkSharp />Here is some other feature</span>
                <span className='flex items-center gap-4' ><IoCheckmarkSharp />Here is some best information </span>
              
            </div>
        </div>
    )
}

export default Description