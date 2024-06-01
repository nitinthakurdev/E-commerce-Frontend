import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "..";


export const SellerContext = createContext()


const SellerContextProvider = ({ children }) => {
    const { AuthorizationToken } = useAuthContext()
    const [OrderSeller,setOrderSeller] = useState(null)

    const GetSellerOrder = async () => {
        try {
            const res = await axios.get("/api/v1/users/seller-get-order")
            setOrderSeller(res.data.data[0])
            // console.log(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (AuthorizationToken) {
            GetSellerOrder()
        }
    }, [AuthorizationToken])

    return (
        <SellerContext.Provider value={{OrderSeller}} >
            {children}
        </SellerContext.Provider>
    )
}

export default SellerContextProvider