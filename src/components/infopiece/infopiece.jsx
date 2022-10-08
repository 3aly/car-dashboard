import React from "react";
import "./infopiece.scss";

export const InfoPiece = ({ title, icon, content, big }) => {
  return (
    <div className={`infopiece`}>
      <h6>{title}</h6>
      <div className={`${big ? "bigholder" : "holder"}`}>
        <img src={icon}></img>
        <span>{content}</span>
      </div>
    </div>
  );
};
