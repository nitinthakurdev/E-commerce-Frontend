import OrdersTable from "../features/Seller/pages/OrderPage/Orders";
import Productlist from "../features/Seller/pages/ProductList/Productlist";



export const SellerRoute = [
    {
        path:"/order",
        element:<OrdersTable/>
    },
    {
        path:"/productlist",
        element:<Productlist/>
    },
]