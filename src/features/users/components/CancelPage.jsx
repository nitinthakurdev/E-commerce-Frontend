import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useComponentContext } from '../../../context';

const PaymentCancel = () => {
    const {CreateOrder} = useComponentContext()
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("orderDetail"))
        setTimeout(()=>{
            CreateOrder({...data,payement_status:"cancel"})
        },2000)
        
        localStorage.removeItem("orderDetail")
    },[])
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
                <p className="mb-4">We're sorry to see that you canceled your payment.</p>
                <p className="mb-8">If you have any questions or need further assistance, please contact our support team.</p>
                <div className="space-x-4">
                    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Return to Home </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
