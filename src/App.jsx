import React from "react";
import { Route, Routes } from "react-router-dom";

import Profile from "./pages/user/Profile";
import PrService from "./pages/user/Print_service";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import PrLog from "./pages/user/Printer_log";
import Bank from "./pages/user/Bank";
import Form from "./pages/user/Form";
import AccManage from "./pages/admin/accManage";
import AdProfile from "./pages/admin/adProfile";
import AdLog from "./pages/admin/adLog";
import PerFileManage from "./pages/admin/perFileManage";
import PrManage from "./pages/admin/prManage";

import initMenus from "./data/menus";
import initadMenu from "./data/admenus";

import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <React.StrictMode>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/user" element={<AuthLayout menu={initMenus}/>}>
            <Route path="/user/" element={<Profile />}></Route>
            <Route path="/user/printService" element={<PrService />}></Route>
            <Route path="/user/printHistory" element={<PrLog />}></Route>
            <Route path="/user/bank" element={<Bank />}></Route>
            <Route path="/user/info" element={<Form />}></Route>
          </Route>
          <Route path="/admin" element={<AuthLayout  menu={initadMenu}/>}>
            <Route path="/admin/" element={<AdProfile />}></Route>
            <Route path="/admin/accManage" element={<AccManage />}></Route>
            <Route path="/admin/adLog" element={<AdLog />}></Route>
            <Route path="/admin/perFileManage" element={<PerFileManage />}></Route>
            <Route path="/admin/prManage" element={<PrManage />}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </React.StrictMode>

  );
}

export default App;
