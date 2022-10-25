import React from "react";
import "./tabscontainer.styles.scss";

export const TabsContainer = ({ tab }) => {
  const { name, isActive } = tab;
  return (
    <div
      className={`tab ${isActive ? "isActive" : ""} d-flex align-items-center`}
    >
      <span>{name}</span>
    </div>
  );
};
