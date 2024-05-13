import React from 'react'

const OrdersTable = () => {
    return (
        <>
        <div className='max-w-screen-2xl overflow-x-hidden px-3' >
            <h2 className='text-2xl font-bold py-4 text-center' >Latest Orders Management Tables </h2>
            <table class="w-full border-collapse border border-blue-500 ">
                <thead>
                    <tr class="bg-blue-500 text-white">
                        <th class="py-2 px-4 text-left">Image/Title</th>
                        <th class="py-2 px-4 text-left">Product Price</th>
                        <th class="py-2 px-4 text-left">Product Qty.</th>
                        <th class="py-2 px-4 text-left">Buyer Name</th>
                        <th class="py-2 px-4 text-left">Payement Method</th>
                        <th class="py-2 px-4 text-left">Payement Status</th>
                        <th class="py-2 px-4 text-left">Delivery Status</th>
                        <th class="py-2 px-4 text-left">Delivery Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b border-blue-500 ">
                        <td class="py-2 px-4 border-r border-blue-500">
                            <span>
                                <img src="./productimage/badSheet.png" className='w-16 h-16' alt="" />
                            </span>
                        </td>
                        <td class="py-2 px-4 border-r border-blue-500">Rs. 5000</td>
                        <td class="py-2 px-4 border-r border-blue-500">1</td>
                        <td class="py-2 px-4 border-r border-blue-500">COD</td>
                        <td class="py-2 px-4 border-r border-blue-500">jhon deo</td>
                        <td class="py-2 px-4 border-r border-blue-500">Pending</td>
                        <td class="py-2 px-4 border-r border-blue-500">Pending</td>
                        <td class="py-2 px-4 border-r border-blue-500">30-12-2024</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div className='max-w-screen-2xl overflow-x-hidden px-3' >
            <h2 className='text-2xl font-bold py-4 text-center' >Old Orders Management Tables </h2>
            <table class="w-full border-collapse border border-blue-500 ">
                <thead>
                    <tr class="bg-blue-500 text-white">
                        <th class="py-2 px-4 text-left">Image/Title</th>
                        <th class="py-2 px-4 text-left">Product Price</th>
                        <th class="py-2 px-4 text-left">Product Qty.</th>
                        <th class="py-2 px-4 text-left">Buyer Name</th>
                        <th class="py-2 px-4 text-left">Payement Method</th>
                        <th class="py-2 px-4 text-left">Payement Status</th>
                        <th class="py-2 px-4 text-left">Delivery Status</th>
                        <th class="py-2 px-4 text-left">Delivery Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b border-blue-500 ">
                        <td class="py-2 px-4 border-r border-blue-500">
                            <span>
                                <img src="./productimage/badSheet.png" className='w-16 h-16' alt="" />
                            </span>
                        </td>
                        <td class="py-2 px-4 border-r border-blue-500">Rs. 5000</td>
                        <td class="py-2 px-4 border-r border-blue-500">1</td>
                        <td class="py-2 px-4 border-r border-blue-500">COD</td>
                        <td class="py-2 px-4 border-r border-blue-500">jhon deo</td>
                        <td class="py-2 px-4 border-r border-blue-500">Pending</td>
                        <td class="py-2 px-4 border-r border-blue-500">Pending</td>
                        <td class="py-2 px-4 border-r border-blue-500">30-12-2024</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        </>
    )
}

export default OrdersTable