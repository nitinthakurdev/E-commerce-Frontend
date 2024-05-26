import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "..";

export const ComponentContext = createContext()

const ComponentContextProvider = ({children})=>{

    const {AuthorizationToken} = useAuthContext()
    const [reviews,setreviews] = useState([])
    const [disable,setDisable] = useState(false)
    const [cartData,setCartData] = useState([])

    const GetReviews = async()=>{
        try{
            const res = await axios.get("/api/v1/review/get")
            setreviews(res.data.data)
        }catch(err){
            console.log(err)
        }
    }
    
    const getCart = async()=>{
        try{
            const res = await axios.get("/api/v1/cart-management/get-cart")
            setCartData(res.data.data)
        }catch(err){
            console.log(err)
        }
    }


    const AddToCart = async(data)=>{
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try{
            const res = await axios.post("/api/v1/cart-management/add-to-cart",data)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        }catch(err){
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }finally{
            setDisable(false)
        }
    }

   
    const RemoveToCart = async(id)=>{
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try{
            const res = await axios.delete(`/api/v1/cart-management/remove-cart-item/${id}`)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        }catch(err){
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }finally{
            setDisable(false)
        }
    }

    const updateQty = async(id,value)=>{
        setDisable(true)
        const data = {
            product_qty:value
        }
        const toastId = toast.loading('Loading...');
        try{
            const res = await axios.patch(`/api/v1/cart-management/add-qty/${id}`,data)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        }catch(err){
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }finally{
            setDisable(false)
        }
    }


    const RemoveCart = async(id)=>{
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try{
            const res = await axios.delete(`/api/v1/cart-management/remove-cart`)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        }catch(err){
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }finally{
            setDisable(false)
        }
    }
   


    useEffect(()=>{
        GetReviews()
    },[])

    useEffect(()=>{
        if(AuthorizationToken){
            getCart()
        }

    },[AuthorizationToken])

    return (
        <ComponentContext.Provider value={{reviews,disable,AddToCart,cartData,
        RemoveToCart,updateQty,RemoveCart}}>
            {children}
        </ComponentContext.Provider>
    )
}

export default ComponentContextProvider