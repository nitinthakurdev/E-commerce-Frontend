import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [AuthorizationToken, setAuthorizationToken] = useState(localStorage.getItem("AccessToken"))
    const [userType, setUserType] = useState(localStorage.getItem("type"))
    const [user, setUser] = useState(null)
    const [disabled, setDisabled] = useState(false)

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

    const LogoutHandler = async () => {
        const toastId = toast.loading('Loading...');
        try {
            localStorage.clear()
            setAuthorizationToken(null)
            setUserType(null)
            const res = await axios.put("/api/v1/users/logout")
            toast.dismiss(toastId);
            toast.success(res.data.message)
            window.location.href = "/"
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }
    }

    const GetLoginUser = async () => {
        try {
            const res = await axios.get("/api/v1/users/get-user")
            setUser(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const UpdateUser = async (data) => {
        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.post("/api/v1/users/update-user", data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            setUser(res.data.data)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }

    const EditProfile = async (data) => {
        setDisabled(true)
        const toastId = toast.loading('Loading...');
        try {
            const res = await axios.patch("/api/v1/users/avatar", data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
            setUser(res.data.data)
        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        } finally {
            setDisabled(false)
        }
    }

    useEffect(() => {
        if (AuthorizationToken) {
            GetLoginUser()
        }
    }, [AuthorizationToken])


    return (
        <AuthContext.Provider value={{
            LoginHandler, RegisterHandler,
            AuthorizationToken, LogoutHandler, userType, user, UpdateUser,EditProfile
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider