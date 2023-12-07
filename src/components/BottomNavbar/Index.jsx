import {
  faBell,
  faHome,
  faMessage,
  faSignOut,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

function Index() {
  const menus = useMemo(
    () => [
      {
        label: "Home",
        icon: faHome,
        link: "/",
        dis: "translate-x-0",
      },
      {
        label: "Notifikasi",
        icon: faBell,
        link: "/table",
        dis: "translate-x-16",
      },
      {
        label: "Pesan",
        icon: faMessage,
        link: "/form",
        dis: "translate-x-32",
      },
      {
        label: "Profile",
        icon: faUserAlt,
        link: "/profile",
        dis: "translate-x-48",
      },
      {
        label: "Keluar",
        icon: faSignOut,
        link: "/auth/login",
        dis: "translate-x-64",
      },
    ],
    []
  );

  const { pathname } = useLocation();

  const [active, setActive] = useState(
    menus.findIndex((x) => x.link === pathname)
  );

  useEffect(() => {
    setActive(menus.findIndex((x) => x.link === pathname));
  }, [pathname, menus]);

  return (
    null
  );
}

export default Index;
