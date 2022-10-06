import React from "react";
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

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="title">
        <span>
          <img src={logo}></img>
        </span>
        <h3>Motiv.</h3>
      </div>

      <div className="links-container">
        <LinkItem
          imageurl={dashboard}
          to={"dashboard"}
          label={"Dashboard"}
        ></LinkItem>
        <LinkItem imageurl={assets} to={"assets"} label={"Assets"}></LinkItem>
        <LinkItem
          imageurl={booking}
          to={"booking"}
          label={"Booking"}
        ></LinkItem>
        <LinkItem
          imageurl={sellcars}
          to={"sellcars"}
          label={"SellCars"}
        ></LinkItem>
        <LinkItem
          imageurl={buycars}
          to={"buycars"}
          label={"BuyCars"}
        ></LinkItem>
        <LinkItem
          imageurl={services}
          to={"services"}
          label={"Services"}
        ></LinkItem>
        <LinkItem
          imageurl={calender}
          to={"calender"}
          label={"Calender"}
        ></LinkItem>
        <LinkItem
          imageurl={messages}
          to={"messages"}
          label={"Messages"}
        ></LinkItem>
      </div>

      <div className="settings-container">
        <LinkItem
          imageurl={settings}
          to={"settings"}
          label={"Settings"}
        ></LinkItem>
        <LinkItem imageurl={logout} to={"logout"} label={"Logout"}></LinkItem>
      </div>
      <Outlet />
    </div>
  );
};
