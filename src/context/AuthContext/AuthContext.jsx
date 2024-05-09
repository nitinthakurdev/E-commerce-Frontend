import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [AuthorizationToken, setAuthorizationToken] = useState(sessionStorage.getItem("AccessToken"))

    const LoginHandler = async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/users/login", data)
            sessionStorage.setItem("AccessToken", res.data.accessToken)
            setAuthorizationToken(res?.data?.accessToken)
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
            toast.dismiss(toastId);
            toast.success(res.data.message)

        } catch (err) {

            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }
    }

    const LogoutHandler = async ()=>{
        sessionStorage.clear()
        setAuthorizationToken(null)
        window.location.href = "/"
    }


    

    return (
        <AuthContext.Provider value={{ LoginHandler, RegisterHandler, AuthorizationToken,LogoutHandler }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider