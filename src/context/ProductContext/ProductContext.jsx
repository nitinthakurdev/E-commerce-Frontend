import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "..";

export const Productcontext = createContext()

const ProductContextProvider = ({ children }) => {
    const { AuthorizationToken } = useAuthContext()
    const [disabled, setDisabled] = useState(false)
    const [category, setCategory] = useState([])
    const [allProduct, setAllProduct] = useState([])

    const GetCategory = async () => {
        try {
            const res = await axios.get("/api/v1/category/get")
            setCategory(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const CreateCategory = async (data) => {
        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/category/create", data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            GetCategory()
            window.location.href = "/category-list"
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }

    const Deletecategory = async (id) => {

        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`/api/v1/category/delete/${id}`)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            GetCategory()
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }

    const EditCategory = async (data, id) => {
        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.patch(`/api/v1/category/update/${id}`, data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            GetCategory()
            window.location.href = "/category-list"

        } catch (err) {
            console.log(err)
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }


    const GetProduct = async () => {
        try {
            const res = await axios.get("/api/v1/product/getall")
            setAllProduct(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const CreateProduct = async (data) => {
        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/product/create", data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            GetProduct()
            window.location.href = "/product-list"
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }


    const DeleteProduct = async (id) => {

        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.delete(`/api/v1/product/delete/${id}`)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            GetProduct()
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }



    useEffect(() => {
        GetCategory()
        GetProduct()

    }, [])


    return (
        <Productcontext.Provider value={{
            CreateCategory, disabled, category,
            Deletecategory, EditCategory, CreateProduct, allProduct, DeleteProduct
        }} >
            {children}
        </Productcontext.Provider>
    )
}

export default ProductContextProvider