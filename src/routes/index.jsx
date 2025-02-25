import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import UserLayout from "./UserLayout";
import Home from "../features/Main/pages/Home";
import { MainRoutes } from "./Main.routes";
import { UserRoute } from "./User.routes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from "../features/users/pages/UserProfile";
import MyProfile from "../features/users/pages/UserProfile/components/MyProfile";
import Order from "../features/users/pages/UserProfile/components/Order";
import Rewards from "../features/users/pages/UserProfile/components/Rewards";
import SavedAddress from "../features/users/pages/UserProfile/components/SavedAddress";
import Wishlist from "../features/users/pages/UserProfile/components/Wishlist";
import { useAuthContext } from "../context";
import SellerLayout from "./SellerLayout";
import { SellerRoute } from "./Seller.routes";
import SellerHome from "../features/Seller/pages";
import NotFound from "../features/Main/components/NotFound";

const index = () => {
  const { AuthorizationToken,userType } = useAuthContext()
  return (
    <Routes>
      { userType !== "seller"? <Route element={<UserLayout />} >
        <Route path="/" element={<Home />} index />
        {MainRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        )
        )}
        {AuthorizationToken && userType == "user" ?
          UserRoute.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          )) : null
        }
        {AuthorizationToken && userType == "user" ? <Route path="/profile" element={<UserProfile />} >
          <Route index element={<MyProfile />} />
          <Route path="order" element={<Order />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="save-address" element={<SavedAddress />} />
          <Route path="rewards" element={<Rewards />} />
        </Route> : null}
      </Route> : null}
      {AuthorizationToken && userType === "seller" ? <Route element={<SellerLayout/>}>
        <Route path="/" element={<SellerHome/>} />
        {SellerRoute.map((item,index)=>(
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route> : null}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/seller" element={<Register />} />
      <Route path="/*" element={<NotFound/>} />

    </Routes>
  )
}

export { index }