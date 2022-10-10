import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./linkitem.styles.scss";

export default function LinkItem({ to, imageurl, label, ...otherProps }) {
  return (
    <div className="container">
      <img src={imageurl} />
      <NavLink className="navlink" to={to}>
        {label}
      </NavLink>
    </div>
  );
}
