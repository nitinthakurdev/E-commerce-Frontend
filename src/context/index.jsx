import { useContext } from "react";



import { AuthContext } from "./AuthContext/AuthContext";
import { Productcontext } from "./ProductContext/ProductContext";




export { default as AuthContextProvider } from "./AuthContext/AuthContext"
export { default as ProductContextProvider } from "./ProductContext/ProductContext"





export const useAuthContext = () => useContext(AuthContext)
export const useProductContext = () => useContext(Productcontext)