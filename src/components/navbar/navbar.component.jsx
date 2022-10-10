import React, { useContext } from "react";
import "./navbar.styles.scss";
import notify from "../../Icons/notification.png";
import profile from "../../Icons/attractive-kind-cute-young-man-gently-smiling-dressed-beautiful-denim-shirt-isolated-yellow-wall.png";
import search from "../../Icons/Vector.png";
import { Outlet } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContex } from "../../context/theme.contex";

export const NavBar = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContex);

  return (
    <div className="nav-container" id="">
      <div className="search-container">
        {" "}
        <input
          type="text"
          placeholder="Search or type"
          style={{ backgroundImage: `url(${search})` }}
        ></input>
      </div>

      <div className="cont">
        <div className="contianer d-flex align-items-center me-5">
          <Switch onChange={toggleTheme} checked={theme == "dark"} />
          <label className="m-2">{theme} Mode</label>
        </div>
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
