import { useContext } from "react";



import { AuthContext} from "./AuthContext/AuthContext";




export {default as AuthContextProvider} from "./AuthContext/AuthContext"





export const useAuthContext = () => useContext(AuthContext)