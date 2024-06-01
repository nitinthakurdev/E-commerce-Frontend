import React from 'react'
import { useSellerContext } from '../../../../context'

const OrdersTable = () => {
    const { OrderSeller } = useSellerContext()
    // console.log(OrderSeller)
    return (
        <>
            <div className='max-w-screen-2xl overflow-x-hidden px-3' >
                <h2 className='text-2xl font-bold py-4 text-center' >Orders Management Tables </h2>
                <table className="w-full border-collapse border border-blue-500 ">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4 text-left">Image/Title</th>
                            <th className="py-2 px-4 text-left">Product Price</th>
                            <th className="py-2 px-4 text-left">Product Qty.</th>
                            <th className="py-2 px-4 text-left">Buyer Name</th>
                            <th className="py-2 px-4 text-left">Payement Method</th>
                            <th className="py-2 px-4 text-left">Payement Status</th>
                            <th className="py-2 px-4 text-left">Delivery Status</th>
                            <th className="py-2 px-4 text-left">Delivery Date</th>
                        </tr>
                    </thead>
                    
                        {
                            OrderSeller?.OrderedProduct?.map((item, index) => {
                                const  time = item?.createdAt?.split("T")[0]
                                const deliverydate = new Date(time)
                                deliverydate.setDate(deliverydate.getDate() + 2)
                               const delDate= deliverydate.toString().slice(0,16)
                               
                                return (
                                    <tbody key={index} >
                                        {
                                            item?.product?.map((it, ind) => {
                                                const filterProduct =  item?.Product?.filter((i)=>i._id === it.productId)[0]
                                                
                                                return (

                                                    <tr key={ind} className="bg-white border-b border-blue-500 ">
                                                        <td className="py-2 px-4 border-r border-blue-500 flex  items-center gap-2">
                                                            <span>
                                                                <img src={filterProduct?.product_image[0]?.ImageUrl} className='w-16 h-16' alt="" />
                                                            </span>
                                                            <span>
                                                                {filterProduct?.name?.slice(0,20)}
                                                            </span>
                                                        </td>
                                                        <td className="py-2 px-4 border-r border-blue-500">Rs. {filterProduct.selling_price}</td>
                                                        <td className="py-2 px-4 border-r border-blue-500">{it?.product_qty}</td>
                                                        <td className="py-2 px-4 border-r border-blue-500">{item?.DeliveryAddress[0]?.fullname}</td>
                                                        <td className="py-2 px-4 border-r border-blue-500">{item?.payement_method}</td>
                                                        <td className="py-2 px-4 border-r border-blue-500">{item?.payement_status}</td>
                                                        <td className="py-2 px-4 border-r border-blue-500">{item?.delivery_status}</td>
                                                        <td className="py-2 px-4 border-r border-blue-500">{delDate}</td>
                                                    </tr>

                                                )
                                            })
                                        }
                                    </tbody>
                                )
                            })
                        }


                    
                </table>
            </div>

        </>
    )
}

export default OrdersTable