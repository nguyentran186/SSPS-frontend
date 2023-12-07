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
        {/* <Route path="/user" element={<AuthLayout menu={initMenus} />}>
          <Route path="/user/" element={<Profile />}></Route>
        </Route>
        <Route path="/printService" element={<AuthLayout menu={initMenus} />}>
          <Route path="/printService/" element={<PrService />}></Route>
        </Route>
        <Route path="/selectPrinter" element={<AuthLayout menu={initMenus} />}>
          <Route path="/selectPrinter/" element={<PrinterSelect />}></Route>
        </Route>
        <Route path="/printQueue" element={<AuthLayout menu={initMenus} />}>
          <Route path="/printQueue/" element={<PrQueue />}></Route>
        </Route>
        <Route path="/printHistory" element={<AuthLayout menu={initMenus} />}>
          <Route path="/printHistory/" element={<PrLog />}></Route>
        </Route>
        <Route path="/bank" element={<AuthLayout menu={initMenus} />}>
          <Route path="/bank/" element={<Bank />}></Route>
        </Route>
        <Route path="/info" element={<AuthLayout menu={initMenus} />}>
          <Route path="/info/" element={<Form />}></Route>
        </Route>
        <Route path="/noPaper" element={<AuthLayout menu={initMenus} />}>
          <Route path="/noPaper/" element={<NoPaper />}></Route>
        </Route>

        <Route path="/admin" element={<AuthLayout menu={initadMenu} />}>
          <Route path="/admin/" element={<AdProfile />}></Route>
        </Route>
        <Route path="/accManage" element={<AuthLayout menu={initMenus} />}>
          <Route path="/accManage/" element={<AccManage />}></Route>
        </Route>
        <Route path="/accManage" element={<AuthLayout menu={initMenus} />}>
          <Route path="/accManage/" element={<AccManage />}></Route>
        </Route>
        <Route path="/adLog" element={<AuthLayout menu={initMenus} />}>
          <Route path="/adLog/" element={<AdLog />}></Route>
        </Route>
        <Route path="/perFileManage" element={<AuthLayout menu={initMenus} />}>
          <Route path="/perFileManage/" element={<PerFileManage />}></Route>
        </Route>
        <Route path="/prManage" element={<AuthLayout menu={initMenus} />}>
          <Route path="/prManage/" element={<PrManage />}></Route>
        </Route> */}
      </Routes>
    </React.StrictMode>

  );
}

export default App;
