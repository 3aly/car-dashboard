import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navbar/navbar.component";
import { SideBar } from "../../components/sidebar/sidebar.component";
import "./navsystem.styles.scss";

export const NavSystem = () => {
  return (
    <div className="navsystem">
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};
