import { useContext } from "react";



import { AuthContext } from "./AuthContext/AuthContext";
import { Productcontext } from "./ProductContext/ProductContext";
import { ComponentContext } from "./ComponentContext/ComponentContext";
import { SellerContext } from "./SellerContext/SellerContext";



export { default as AuthContextProvider } from "./AuthContext/AuthContext"
export { default as ProductContextProvider } from "./ProductContext/ProductContext"
export {default as ComponentContextProvider} from "./ComponentContext/ComponentContext"
export {default as SellerContextProvider} from "./SellerContext/SellerContext"



export const useAuthContext = () => useContext(AuthContext)
export const useProductContext = () => useContext(Productcontext)
export const useComponentContext = () => useContext(ComponentContext)
export const useSellerContext = () => useContext(SellerContext)