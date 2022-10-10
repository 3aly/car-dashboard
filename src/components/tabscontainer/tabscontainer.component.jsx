import React from "react";
import "./tabscontainer.styles.scss";

export const TabsContainer = ({ tab }) => {
  const { name, active } = tab;
  return (
    <div className={`tab ${active ? "active" : ""} d-flex align-items-center`}>
      <span>{name}</span>
    </div>
  );
};
