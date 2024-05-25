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
        path:"/product-list",
        element:<Productlist/>
    },
    {
        path:"/category-list",
        element:<Categorylist/>
    },
    {
        path:"/add-product/new",
        element:<AddProduct/>
    },
    {
        path:"/add-category/new",
        element:<AddCategory/>
    },
    {
        path:"/add-category/:id",
        element:<AddCategory/>
    },
    {
        path:"/add-product/:id",
        element:<AddProduct/>
    },
]