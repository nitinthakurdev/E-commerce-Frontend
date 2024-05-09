import React from 'react'

const AboutSeller = () => {
  return (
    <div className='py-3' >
        <h2 className='font-medium text-lg  px-3' >Seller Details</h2>
        <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden max-w-sm  my-5">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Seller Name</td>
                            <td className="py-3 px-4 text-left">#123456</td>
                        </tr>
                        <tr className='border-b-2 ' >
                            <td className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600">Seller Place</td>
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
    </div>
  )
}

export default AboutSeller