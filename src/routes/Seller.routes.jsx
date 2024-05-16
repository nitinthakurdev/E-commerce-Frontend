import AddCategory from "../features/Seller/pages/AddCategory";
import AddProduct from "../features/Seller/pages/AddProduct";
import OrdersTable from "../features/Seller/pages/OrderPage/Orders";
import Productlist from "../features/Seller/pages/ProductList/Productlist";
import Categorylist from "../features/Seller/pages/categoryList/Categorylist";



export const SellerRoute = [
    {
        path:"/order",
        element:<OrdersTable/>
    },
    {
        path:"/productlist",
        element:<Productlist/>
    },
    {
        path:"/categorylist",
        element:<Categorylist/>
    },
    {
        path:"/add-new-product",
        element:<AddProduct/>
    },
    {
        path:"/add-new-category",
        element:<AddCategory/>
    },
]