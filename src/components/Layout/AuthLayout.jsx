import React, { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarToggle } from "./../../utils/toggler.js";
import BottomNavbar from "../BottomNavbar/Index";
import { UserContext } from "../../context/userContext";

function AuthLayout({...props}) {
  const isDesktop = () => document.body.clientWidth > 768;
  const [sidebarStatus, setSidebarStatus] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSidebarStatus(isDesktop());
    });
    return () => window.removeEventListener("resize", isDesktop);
  }, []);

  return (
    <div className="adminLayout">
      {/* Sidebar */}
      <Sidebar
        menu = {props.menu}
        toggle={sidebarToggle}
        className={sidebarStatus ? "" : "mobile"}
      />

      {/* Main Wrapper */}
      <div className="mainWrapper">
        <Outlet context={[sidebarToggle]} />
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
}

export default AuthLayout;
