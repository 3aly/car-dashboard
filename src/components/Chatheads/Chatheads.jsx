import React, { useEffect } from "react";
import "./Chathead.scss";
import { NavLink } from "react-router-dom";
import { MessagesContex } from "../../context/messages.context";
import { useContext } from "preact/hooks";
import { ThemeContex } from "../../context/theme.contex";

const ChatHeads = ({ imgUrl, title, lastMessage, id, time }) => {
  return (
    <NavLink
      className="chathead"
      to={`${id}`}
      style={({ isActive }) => {
        return { backgroundColor: isActive ? "#2B2E38" : "" };
      }}
    >
      <img className="img-fluid  rounded-circle" src={imgUrl} />
      <div className="container d-flex flex-column">
        <h5>{title}</h5>
        <div className="lastmessage">
          {" "}
          <span>{lastMessage}</span>
          <span>{time}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ChatHeads;
