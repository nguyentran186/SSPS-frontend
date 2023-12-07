import React from "react";
import { Route, Routes } from "react-router-dom";

import Profile from "./pages/user/Profile";
import PrService from "./pages/user/Print_service";
import PrLog from "./pages/user/Printer_log";
import Bank from "./pages/user/Bank";
import Form from "./pages/user/Form";
import PrinterSelect from "./pages/user/Printer_select";
import PrQueue from "./pages/user/Print_queue";

import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";

import Login from "./pages/auth/Login";

import AccManage from "./pages/admin/accManage";
import AdProfile from "./pages/admin/adProfile";
import AdLog from "./pages/admin/adLog";
import PerFileManage from "./pages/admin/perFileManage";
import PrManage from "./pages/admin/prManage";
import NoPaper from "./pages/user/NoPaper"

import initMenus from "./data/menus";
import initadMenu from "./data/admenus";

import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <React.StrictMode>
        <Routes>
          <Route path="/SSPS-frontend" element={<Login />}></Route>
          <Route path="/SSPS-frontend/user" element={<AuthLayout menu={initMenus}/>}>
            <Route path="/SSPS-frontend/user/" element={<Profile />}></Route>
            <Route path="/SSPS-frontend/user/printService" element={<PrService />}></Route>
            <Route path="/SSPS-frontend/user/selectPrinter" element={<PrinterSelect />}></Route>
            <Route path="/SSPS-frontend/user/printQueue" element={<PrQueue />}></Route>
            <Route path="/SSPS-frontend/user/printHistory" element={<PrLog />}></Route>
            <Route path="/SSPS-frontend/user/bank" element={<Bank />}></Route>
            <Route path="/SSPS-frontend/user/info" element={<Form />}></Route>
            <Route path="/SSPS-frontend/user/noPaper" element={<NoPaper/>}></Route>
          </Route>
          <Route path="/SSPS-frontend/admin" element={<AuthLayout  menu={initadMenu}/>}>
            <Route path="/SSPS-frontend/admin/" element={<AdProfile />}></Route>
            <Route path="/SSPS-frontend/admin/accManage" element={<AccManage />}></Route>
            <Route path="/SSPS-frontend/admin/adLog" element={<AdLog />}></Route>
            <Route path="/SSPS-frontend/admin/perFileManage" element={<PerFileManage />}></Route>
            <Route path="/SSPS-frontend/admin/prManage" element={<PrManage />}></Route>
          </Route>
        </Routes>
    </React.StrictMode>

  );
}

export default App;
