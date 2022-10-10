import React from "react";
import "./navbar.styles.scss";
import notify from "../../Icons/notification.png";
import profile from "../../Icons/attractive-kind-cute-young-man-gently-smiling-dressed-beautiful-denim-shirt-isolated-yellow-wall.png";
import search from "../../Icons/Vector.png";
import { Outlet } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <div className="nav-container">
      <div className="search-container">
        {" "}
        <input
          type="text"
          placeholder="Search or type"
          style={{ backgroundImage: `url(${search})` }}
        ></input>
      </div>
      <div className="cont">
        <div className="notify">
          {" "}
          <img src={notify}></img>
        </div>
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${profile})`, resizeMode: "cover" }}
        ></div>
      </div>
    </div>
  );
};
