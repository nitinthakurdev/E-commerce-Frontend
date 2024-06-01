import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "..";
import { loadStripe } from '@stripe/stripe-js';

export const ComponentContext = createContext()

const ComponentContextProvider = ({ children }) => {

    const { AuthorizationToken } = useAuthContext()
    const [reviews, setreviews] = useState([])
    const [disable, setDisable] = useState(false)
    const [cartData, setCartData] = useState([])
    const [addressData,setAddressData] = useState([])

    const GetReviews = async () => {
        try {
            const res = await axios.get("/api/v1/review/get")
            setreviews(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getCart = async () => {
        try {
            const res = await axios.get("/api/v1/cart-management/get-cart")
            setCartData(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }


    const AddToCart = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/cart-management/add-to-cart", data)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }


    const RemoveToCart = async (id) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`/api/v1/cart-management/remove-cart-item/${id}`)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }

    const updateQty = async (id, value) => {
        setDisable(true)
        const data = {
            product_qty: value
        }
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.patch(`/api/v1/cart-management/add-qty/${id}`, data)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }


    const RemoveCart = async () => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`/api/v1/cart-management/remove-cart`)
            getCart()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }

    const makePayement = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const stripe = await loadStripe('pk_test_51PLhIb2MzZaNljr06WIKQL7Mceudw8DeDYYyIVWtxIVbQJR6XXmHQ0ASBUxzQjpyED8VJapL3rJVhNGGoswBOcU400XSAnynlF');
            const newData = [{
                name: data?.name,
                image: data?.product_image[0]?.ImageUrl,
                price: data?.selling_price,
                product_qty: 1
            }]

            if (AuthorizationToken) {
                const res = await axios.post("/api/v1/users/payement", newData)
                toast.dismiss(toastId);
                const session = res.data.sessionId
                const result = stripe.redirectToCheckout({
                    sessionId: session
                })
                console.log(result)
            } else {
                window.location.href = "/login"
            }
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }finally{
            setDisable(false)
        }
    }

    const CheckoutWithCart = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const stripe = await loadStripe('pk_test_51PLhIb2MzZaNljr06WIKQL7Mceudw8DeDYYyIVWtxIVbQJR6XXmHQ0ASBUxzQjpyED8VJapL3rJVhNGGoswBOcU400XSAnynlF');
            const newData = data.map((item)=>({

                    name:item?.product_id?.name ,
                    image: item?.product_id?.product_image[0]?.ImageUrl,
                    price: item?.product_id?.selling_price,
                    product_qty: item?.product_qty
            }))

            if (AuthorizationToken) {
                const res = await axios.post("/api/v1/users/payement", newData)
                toast.dismiss(toastId);
                const session = res.data.sessionId
                const result = stripe.redirectToCheckout({
                    sessionId: session
                })
                console.log(result)
            } else {
                window.location.href = "/login"
            }
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }finally{
            setDisable(false)
        }
    }

    const getAddress = async () => {
        try{
            const res = await axios.get("/api/v1/address/get")
            setAddressData(res.data.data)
        }catch(err){
            console.log(err)
        }
    }

    const CreateAddress = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post(`/api/v1/address/create`,data)
            getAddress()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }

    const DeleteAddress = async (id) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`/api/v1/address/delete/${id}`)
            getAddress()
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }


    const CreateOrder = async (data) => {
        console.log(data)
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post(`/api/v1/order/create`,data)
            
            getAddress()
            toast.dismiss(toastId);
            toast.success(res.data.message)
            window.location.href = "/profile/order"
        } catch (err) {
            
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisable(false)
        }
    }

    



    useEffect(() => {
        GetReviews()
    }, [])

    useEffect(() => {
        if (AuthorizationToken) {
            getCart()
            getAddress()
        }

    }, [AuthorizationToken])

    return (
        <ComponentContext.Provider value={{
            reviews, disable, AddToCart, cartData,
            RemoveToCart, updateQty, RemoveCart, makePayement,CheckoutWithCart,
            CreateAddress,addressData,DeleteAddress,CreateOrder
        }}>
            {children}
        </ComponentContext.Provider>
    )
}

export default ComponentContextProvider