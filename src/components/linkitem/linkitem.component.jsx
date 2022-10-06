import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./linkitem.styles.scss";

export default function LinkItem({ to, imageurl, label, ...otherProps }) {
  return (
    <div className="container">
      <img src={imageurl} />
      <Link to={to}>{label}</Link>
    </div>
  );
}
