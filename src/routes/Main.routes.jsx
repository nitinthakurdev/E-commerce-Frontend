import ProductSummery from "../features/Main/pages/Productsummerypage";
import ProductDetail from "../features/Main/pages/productDetailPage";


const MainRoutes = [
    
    {
      path: "/productlist",
      element: <ProductSummery />,
    },
    {
      path: "/productdetail",
      element: <ProductDetail />,
    },
  ];


  export {MainRoutes}