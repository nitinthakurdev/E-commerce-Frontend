import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useComponentContext } from '../../../context';

const PaymentSuccess = () => {

    const {CreateOrder} = useComponentContext()
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("orderDetail"))
        setTimeout(()=>{
            CreateOrder({...data,payement_status:"success"})
        },2000)
        
        localStorage.removeItem("orderDetail")
    },[])
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ rotate: 360, scale: 1 }} 
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="text-green-500 mb-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4 -4" />
                    </svg>
                </motion.div>
                <h1 className="text-2xl font-bold mb-4">Payment Successful</h1>
                <p className="mb-4">Thank you for your purchase. Your payment was successful.</p>
                <div className="space-x-4">
                    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Return to Shop</Link>
                    <Link to="/profile/order" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">View Order History</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentSuccess;
