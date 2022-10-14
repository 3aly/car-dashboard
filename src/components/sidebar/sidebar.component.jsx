import React, { useContext } from "react";
import LinkItem from "../linkitem/linkitem.component";
import dashboard from "../../Icons/dashboard-icon.png";
import assets from "../../Icons/Doughnut/Line.png";
import booking from "../../Icons/Car/Line.png";
import sellcars from "../../Icons/Shopping Bag/Line.png";
import buycars from "../../Icons/Shopping Cart/Line.png";
import services from "../../Icons/Fencing/Line.png";
import calender from "../../Icons/Calendar/Line.png";
import messages from "../../Icons/Comment/Line.png";
import logo from "../../Icons/logo.png";
import settings from "../../Icons/Cog/Line.png";
import logout from "../../Icons/Sign Out/Line.png";

import "./sidebar.styles.scss";
import { Outlet } from "react-router-dom";
import { ThemeContex } from "../../context/theme.contex";

export const SideBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContex);

  return (
    <div className="sidebar-container">
      <div>
        <div className="title">
          <span>
            <img src={logo}></img>
          </span>
          <h3>Motiv.</h3>
        </div>

        <div className="links-container">
          <LinkItem
            className="navlink"
            imageurl={dashboard}
            to={"dashboard"}
            label={"Dashboard"}
          ></LinkItem>
          <LinkItem
            imageurl={assets}
            to={"assets"}
            label={"Assets"}
            className="navlink"
          ></LinkItem>
          <LinkItem
            className="navlink"
            imageurl={booking}
            to={"booking"}
            label={"Booking"}
          ></LinkItem>
          <LinkItem
            className="navlink"
            imageurl={sellcars}
            to={"sellcars"}
            label={"SellCars"}
          ></LinkItem>
          <LinkItem
            className="navlink"
            imageurl={buycars}
            to={"buycars"}
            label={"BuyCars"}
          ></LinkItem>
          <LinkItem
            className="navlink"
            imageurl={services}
            to={"services"}
            label={"Services"}
          ></LinkItem>
          <LinkItem
            className="navlink"
            imageurl={calender}
            to={"calender"}
            label={"Calender"}
          ></LinkItem>
          <LinkItem
            className="navlink"
            imageurl={messages}
            to={"messages"}
            label={"Messages"}
          ></LinkItem>
        </div>
      </div>

      <div className="settings-container">
        <LinkItem
          className="navlink"
          imageurl={settings}
          to={"settings"}
          label={"Settings"}
        ></LinkItem>
        <LinkItem
          imageurl={logout}
          to={"signin"}
          label={"Logout"}
          className="navlink"
        ></LinkItem>
      </div>
    </div>
  );
};
