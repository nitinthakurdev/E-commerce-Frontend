import axios from "axios";
import { createContext } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{

    const LoginHandler = async(data) => {
        const toastId = toast.loading('Loading...');
        try{
            const res = await axios.post("/api/v1/users/login",data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
        }catch(err){
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }
    }

    const RegisterHandler = async(data) => {
        const toastId = toast.loading('Loading...');
        try{
            
            const res = await axios.post("/api/v1/users/register",data)
            toast.dismiss(toastId);
            toast.success(res.data.message)
        }catch(err){
            
            toast.dismiss(toastId);
            toast.error(err.response.data.message)
        }
    }

    return(
        <AuthContext.Provider value={{LoginHandler,RegisterHandler}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider