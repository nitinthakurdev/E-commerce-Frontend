import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [AuthorizationToken, setAuthorizationToken] = useState(localStorage.getItem("AccessToken"))
    const [userType,setUserType] = useState(localStorage.getItem("type"))

    const LoginHandler = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/users/login", data)
            localStorage.setItem("AccessToken", res.data.accessToken)
            localStorage.setItem("type", res.data.data.type)
            setAuthorizationToken(res?.data?.accessToken)
            setUserType(res.data.data.type)
            toast.dismiss(toastId);
            toast.success(res.data.message)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err?.response?.data?.message)
        }
    }

    const RegisterHandler = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/users/register", data)
            localStorage.setItem("AccessToken", res.data.accessToken)
            localStorage.setItem("type", res.data.data.type)
            setAuthorizationToken(res?.data?.accessToken)
            setUserType(res.data.data.type)
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }
    }

    const LogoutHandler = async ()=>{
        const toastId = toast.loading('Loading...');
        try{
        localStorage.clear()
        setAuthorizationToken(null)
        setUserType(null)
        const res = await axios.put("/api/v1/users/logout")
        toast.dismiss(toastId);
        toast.success(res.data.message)
        window.location.href = "/"
        }catch(err){
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }
    }


    

    return (
        <AuthContext.Provider value={{ LoginHandler, RegisterHandler, AuthorizationToken,LogoutHandler,userType }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider