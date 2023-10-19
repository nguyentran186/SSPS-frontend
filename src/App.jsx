import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/user/Dashboard";
import Table from "./pages/user/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import Blank from "./pages/user/Blank";
import NotFound from "./pages/user/NotFound";
import Form from "./pages/user/Form";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<AuthLayout />}>
    //     <Route path="/" element={<Dashboard />}></Route>
    //     <Route path="/table" element={<Table />}></Route>
    //     <Route path="/blank" element={<Blank />}></Route>
    //     <Route path="/404" element={<NotFound />}></Route>
    //     <Route path="/form" element={<Form />}></Route>
    //     <Route path="/profile" element={<Blank />}></Route>
    //   </Route>
    //   <Route path="/auth" element={<GuestLayout />}>
    //     <Route path="/auth/login" element={<Login />}></Route>
    //   </Route>
    // </Routes>
    <React.StrictMode>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/user" element={<AuthLayout />}>
            <Route path="/user/" element={<Dashboard />}></Route>
            <Route path="/user/printService" element={<Table />}></Route>
            <Route path="/user/printHistory" element={<Blank />}></Route>
            <Route path="/user/bank" element={<NotFound />}></Route>
            <Route path="/user/info" element={<Form />}></Route>
            <Route path="/user/profile" element={<Blank />}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </React.StrictMode>

  );
}

export default App;
