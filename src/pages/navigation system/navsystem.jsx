import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navbar/navbar.component";
import { SideBar } from "../../components/sidebar/sidebar.component";

export const NavSystem = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Outlet />
    </div>
  );
};
