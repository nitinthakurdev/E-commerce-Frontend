import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import UserLayout from "./UserLayout";
import Home from "../features/Main/pages/Home";
import { MainRoutes} from "./Main.routes";

const index = () => {
  return (
    <Routes>
        <Route element={<UserLayout/>} >
        <Route path="/*" element={<Home />} index />
        {MainRoutes.map((item,index)=> (
            <Route key={index} path={item.path} element={item.element} />
          )
        )}
        </Route>
    </Routes>
  )
}

export {index}